import axios, { AxiosInstance } from 'axios';
import { AbstractHttpClient } from '../AbstractHttpClient';
import { TokenRepository } from '@/core/repositories/types';
import { setupAxiosInterceptors } from '../interceptors/AxiosInterceptors';

export class AxiosHttpClient extends AbstractHttpClient {
  private api: AxiosInstance;

  constructor(
    baseURL: string,
    private tokenRepository: TokenRepository,
  ) {
    super(baseURL);
    this.api = axios.create({
      baseURL,
      headers: this.getDefaultHeaders(),
    });
    setupAxiosInterceptors(this.api, this.tokenRepository);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
