import axios, { AxiosRequestConfig } from 'axios';
import { AbstractHttpClient } from './AbstractHttpClient';

export class AxiosAdapter extends AbstractHttpClient {
  constructor(baseURL: string = '') {
    super(baseURL);
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await axios.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await axios.post<T>(url, data, config);
    return response.data;
  }

  put<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
