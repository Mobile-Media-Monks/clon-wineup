/* eslint-disable @typescript-eslint/no-explicit-any */
import { needsToken } from '@/utils/authUtils';
import { refreshToken } from '@/core/rest/services/authentication';
import {
  EXCLUDED_RETRY_ENDPOINTS,
  RETRY_STATUS_CODES,
} from '@/core/rest/request-handler/constants';
import { TokenStorage } from '@/core/rest/services/storage';
import { AbstractHttpClient } from '@/core/rest/request-handler/AbstractHttpClient';

interface RequestConfig {
  method: string;
  url: string;
  body?: unknown;
  queryParams?: Record<string, any>;
  _retry?: boolean;
}

export class FetchHttpClient extends AbstractHttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async requestInterceptor(
    config: RequestInit & { url?: string },
  ): Promise<RequestInit> {
    const token = TokenStorage.getAccessToken();
    const csrfToken = TokenStorage.getCsrfToken();

    if (config.url && needsToken(config.url, this.baseURL)) {
      config.headers = {
        ...config.headers,
        ...(token && { Authorization: `Bearer ${token}` }),
        ...(csrfToken && { 'X-CSRF-Token': csrfToken }),
      };
    }

    return config;
  }

  private async responseInterceptor(
    response: Response,
    config: RequestConfig,
  ): Promise<Response> {
    if (!response.ok) {
      const isRetryableStatus = RETRY_STATUS_CODES.includes(response.status);
      const isExcludedEndpoint = EXCLUDED_RETRY_ENDPOINTS.some(endpoint =>
        config.url.includes(endpoint),
      );

      if (isRetryableStatus && !config._retry && !isExcludedEndpoint) {
        try {
          const tokens = await refreshToken();
          TokenStorage.setTokens(tokens);
          this.setDefaultHeaders({
            Authorization: `Bearer ${tokens.access_token}`,
            'X-CSRF-Token': tokens.csrf_token,
          });

          // Retry the original request with new tokens
          return this.executeRequest({
            ...config,
            _retry: true,
          });
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          throw refreshError;
        }
      }

      const errorData = await response.json().catch(() => ({}));
      throw { status: response.status, data: errorData, config };
    }

    return response;
  }

  private async executeRequest(config: RequestConfig): Promise<Response> {
    const url = new URL(config.url, this.baseURL);

    if (config.queryParams) {
      Object.entries(config.queryParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    const requestConfig: RequestInit & { url: string } = {
      method: config.method,
      headers: { ...this.defaultHeaders },
      url: config.url,
      ...(config.body ? { body: JSON.stringify(config.body) } : {}),
    };

    const interceptedConfig = await this.requestInterceptor(requestConfig);
    const response = await fetch(url.toString(), interceptedConfig);
    return this.responseInterceptor(response, config);
  }

  private async request<T>(config: RequestConfig): Promise<T> {
    try {
      const response = await this.executeRequest(config);
      return this.parseResponse<T>(response);
    } catch (error) {
      console.error('Request error:', error);
      throw error;
    }
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('Content-Type');
    if (response.status === 204 || !contentType) {
      return {} as T;
    }

    if (contentType.includes('application/json')) {
      return response.json();
    }

    throw new Error(`Unsupported content type: ${contentType}`);
  }

  public setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };
  }

  public setAuthTokens(tokens: {
    access_token: string;
    csrf_token: string;
  }): void {
    this.setDefaultHeaders({
      Authorization: `Bearer ${tokens.access_token}`,
      'X-CSRF-Token': tokens.csrf_token,
    });
  }

  async get<T>(path: string, queryParams?: Record<string, any>): Promise<T> {
    return this.request<T>({
      method: 'GET',
      url: path,
      queryParams,
    });
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>({
      method: 'POST',
      url: path,
      body,
    });
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>({
      method: 'PUT',
      url: path,
      body,
    });
  }

  async delete<T>(path: string): Promise<T> {
    return this.request<T>({
      method: 'DELETE',
      url: path,
    });
  }

  // Error handling utility method
  private handleRequestError(error: any): never {
    if (error.response) {
      throw {
        status: error.response.status,
        data: error.response.data,
        config: error.config,
      };
    }

    if (error.request) {
      throw {
        status: 0,
        data: { message: 'Network Error' },
        config: error.config,
      };
    }

    throw {
      status: 0,
      data: { message: error.message || 'Unknown Error' },
      config: error.config,
    };
  }
}
