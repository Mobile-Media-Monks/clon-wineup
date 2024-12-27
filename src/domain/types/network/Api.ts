import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface Api {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  put<T>(url: string, data: object): Promise<AxiosResponse<T>>;
  delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
  patch<T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>>;
}

export type APIConstructor = new (...args: unknown[]) => Api;

export type ApiServiceConstructors = Record<string, APIConstructor>;
