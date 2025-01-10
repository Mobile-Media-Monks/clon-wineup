/* eslint-disable @typescript-eslint/no-explicit-any */
import Config from 'react-native-config';
import { IHttpClient } from '@/core/@types/models/IHttpClient';
import { AxiosHttpClient } from '@/core/rest/request-handler/adapters/AxiosHttpClient';
//import { FetchHttpClient } from '@/core/rest/request-handler/adapters/FetchHttpClient';

export class Client {
  private httpClient: IHttpClient;

  constructor(baseURL: string = Config.BASE_URL) {
    this.httpClient = new AxiosHttpClient(baseURL);
    //this.httpClient = new FetchHttpClient(baseURL);
  }

  async get<T>(path: string, queryParams?: { [key: string]: any }): Promise<T> {
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
