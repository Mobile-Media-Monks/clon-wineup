import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { needsToken } from '@/utils/authUtils';
import { refreshToken } from '@/core/rest/services/authentication';
import {
  EXCLUDED_RETRY_ENDPOINTS,
  RETRY_STATUS_CODES,
} from '@/core/rest/request-handler/constants';
import { TokenRepository } from '@/core/repositories/types';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const setupAxiosInterceptors = (
  api: AxiosInstance,
  tokenRepository: TokenRepository,
) => {
  // Request interceptor
  api.interceptors.request.use(
    async config => {
      try {
        const tokens = tokenRepository.getToken();

        if (needsToken(config.url, config.baseURL)) {
          if (tokens?.access_token) {
            config.headers.Authorization = `Bearer ${tokens.access_token}`;
          }
          if (tokens?.csrf_token) {
            config.headers['X-CSRF-Token'] = tokens.csrf_token;
          }
        }
      } catch (error) {
        console.log('ERROR INTERCEPTOR:', error);
      }
      return config;
    },
    error => Promise.reject(error),
  );

  // Response interceptor
  api.interceptors.response.use(
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
          tokenRepository.saveToken(tokens);
          api.defaults.headers.common.Authorization = `Bearer ${tokens.access_token}`;
          api.defaults.headers.common['X-CSRF-Token'] = tokens.csrf_token;
          return api(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error.response);
    },
  );
};
