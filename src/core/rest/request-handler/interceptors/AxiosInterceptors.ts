import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import { needsToken } from '@/utils/authUtils';

import { TokenRepository } from '@/core/repositories/types';
import { EXCLUDED_RETRY_ENDPOINTS, RETRY_STATUS_CODES } from '../constants';
import repositories from '@/core/repositories';

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
      console.log('AXIOS ERROR ->>>', error.response?.data);
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
          const tokens = await repositories.user.refreshToken();
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
