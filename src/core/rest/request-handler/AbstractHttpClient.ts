/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHttpClient } from '@/core/@types/models/IHttpClient';

export abstract class AbstractHttpClient implements IHttpClient {
  abstract get<T>(
    path: string,
    queryParams?: { [key: string]: any },
  ): Promise<T>;
  abstract post<T>(path: string, body: unknown): Promise<T>;
  abstract put<T>(path: string, body: unknown): Promise<T>;
  abstract delete<T>(path: string): Promise<T>;

  protected handleError(error: any): void {
    if (error.response) {
      console.log('HTTP error', error.response.data);
    } else if (error.request) {
      console.error('Network Error: ', error.request);
    } else {
      console.error('Error: ', error.message);
    }

    throw error;
  }
}
