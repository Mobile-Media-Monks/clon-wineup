/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractHttpClient } from '@/core/rest/request-handler/AbstractHttpClient';
import repositories from '@/core/repositories';
import { TokenRepository } from '@/core/repositories/types';
import { FetchInterceptors } from '../interceptors/FetchInterceptors';

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
  private tokenRepository: TokenRepository;
  private interceptors: FetchInterceptors;

  constructor(baseURL: string) {
    super();
    this.tokenRepository = repositories.tokens;
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.interceptors = new FetchInterceptors(
      this.tokenRepository,
      this.baseURL,
      this.setDefaultHeaders.bind(this),
      this.executeRequest.bind(this),
    );
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

    const interceptedConfig =
      await this.interceptors.requestInterceptor(requestConfig);
    const response = await fetch(url.toString(), interceptedConfig);
    return this.interceptors.responseInterceptor(response, config);
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
}
