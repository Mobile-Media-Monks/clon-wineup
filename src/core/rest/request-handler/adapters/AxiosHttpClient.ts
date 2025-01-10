/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { needsToken } from '@/utils/authUtils';
import { refreshToken } from '@/core/rest/services/authentication';
import {
  EXCLUDED_RETRY_ENDPOINTS,
  RETRY_STATUS_CODES,
} from '@/core/rest/request-handler/constants';
import { TokenStorage } from '@/core/rest/services/storage';
import { AbstractHttpClient } from '@/core/rest/request-handler/AbstractHttpClient';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export class AxiosHttpClient extends AbstractHttpClient {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    super();
    this.api = axios.create({
      baseURL,
      headers: this.getDefaultHeaders(),
    });

    // Request interceptor
    this.api.interceptors.request.use(
      async config => {
        const token = TokenStorage.getAccessToken();
        const csrfToken = TokenStorage.getCsrfToken();

        if (needsToken(config.url, config.baseURL)) {
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }

          if (csrfToken) {
            config.headers['X-CSRF-Token'] = csrfToken;
          }
        }

        return config;
      },
      error => Promise.reject(error),
    );

    // Response interceptor
    this.api.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;
        const isRetryableStatus = error.response?.status
          ? RETRY_STATUS_CODES.includes(error.response?.status)
          : false;
        const isExcludedEndpoint = EXCLUDED_RETRY_ENDPOINTS.some(endpoint =>
          originalRequest?.url?.includes(endpoint),
        );

        if (
          isRetryableStatus &&
          originalRequest &&
          !originalRequest._retry &&
          !isExcludedEndpoint
        ) {
          originalRequest._retry = true;
          try {
            const tokens = await refreshToken();
            TokenStorage.setTokens(tokens);
            this.api.defaults.headers.common.Authorization = `Bearer ${tokens.access_token}`;
            this.api.defaults.headers.common['X-CSRF-Token'] =
              tokens.csrf_token;
            return this.api(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error.response);
      },
    );
  }

  private getDefaultHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(path: string, queryParams?: { [key: string]: any }): Promise<T> {
    const response = await this.api.get<T>(path, { params: queryParams });
    return response.data;
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const response = await this.api.post<T>(path, body);
    return response.data;
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    const response = await this.api.put<T>(path, body);
    return response.data;
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.api.delete<T>(path);
    return response.data;
  }
}
