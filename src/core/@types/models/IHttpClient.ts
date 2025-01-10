/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHttpClient {
  get<T>(path: string, queryParams?: { [key: string]: any }): Promise<T>;
  post<T>(path: string, body: unknown): Promise<T>;
  put<T>(path: string, body: unknown): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
