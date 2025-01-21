/* eslint-disable @typescript-eslint/no-explicit-any */
import { needsToken } from '@/utils/authUtils';
import { refreshToken } from '@/core/rest/services/authentication';
import {
  EXCLUDED_RETRY_ENDPOINTS,
  RETRY_STATUS_CODES,
} from '@/core/rest/request-handler/constants';
import { TokenRepository } from '@/core/repositories/types';

export interface RequestConfig {
  method: string;
  url: string;
  body?: unknown;
  queryParams?: Record<string, any>;
  _retry?: boolean;
}

export class FetchInterceptors {
  constructor(
    private tokenRepository: TokenRepository,
    private baseURL: string,
    private setDefaultHeaders: (headers: Record<string, string>) => void,
    private executeRequest: (config: RequestConfig) => Promise<Response>,
  ) {}

  async requestInterceptor(
    config: RequestInit & { url?: string },
  ): Promise<RequestInit> {
    const tokens = this.tokenRepository.getToken();

    if (config.url && needsToken(config.url, this.baseURL)) {
      config.headers = {
        ...config.headers,
        ...(tokens?.access_token && {
          Authorization: `Bearer ${tokens.access_token}`,
        }),
        ...(tokens?.csrf_token && { 'X-CSRF-Token': tokens.csrf_token }),
      };
    }

    return config;
  }

  async responseInterceptor(
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
          this.tokenRepository.saveToken(tokens);
          this.setDefaultHeaders({
            Authorization: `Bearer ${tokens.access_token}`,
            'X-CSRF-Token': `${tokens.csrf_token}`,
          });

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
}
