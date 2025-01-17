import { TokenDataStore } from '@/core/store/types';
import { AbstractHttpClient } from './AbstractHttpClient';
import { AxiosHttpClient } from './adapters/AxiosHttpClient';
import dataStore from '@/core/store';
import Config from 'react-native-config';

export class Client {
  private httpClient: AbstractHttpClient;
  private tokenDataStore: TokenDataStore = dataStore.tokenDataStore;

  constructor(baseURL: string = Config.BASE_URL) {
    this.httpClient = new AxiosHttpClient(baseURL, this.tokenDataStore);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get<T>(path: string, queryParams?: Record<string, any>): Promise<T> {
    return this.httpClient.get<T>(path, queryParams);
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    return this.httpClient.post<T>(path, body);
  }

  async put<T>(path: string, body: unknown): Promise<T> {
    return this.httpClient.put<T>(path, body);
  }

  async delete<T>(path: string): Promise<T> {
    return this.httpClient.delete<T>(path);
  }
}
