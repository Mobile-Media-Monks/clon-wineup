/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';
import { AbstractHttpClient } from '@/core/rest/request-handler/AbstractHttpClient';
import repositories from '@/core/repositories';
import { TokenRepository } from '@/core/repositories/types';
import { setupAxiosInterceptors } from '../interceptors/AxiosInterceptors';

export class AxiosHttpClient extends AbstractHttpClient {
  private api: AxiosInstance;

  private tokenRepository: TokenRepository;

  constructor(baseURL: string) {
    super();
    this.tokenRepository = repositories.tokens;
    this.api = axios.create({
      baseURL,
      headers: this.getDefaultHeaders(),
    });
    setupAxiosInterceptors(this.api, this.tokenRepository);
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
