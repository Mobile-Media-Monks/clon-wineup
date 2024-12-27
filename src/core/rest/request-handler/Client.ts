import { AbstractHttpClient } from './AbstractHttpClient';

export class Client extends AbstractHttpClient {
  constructor(baseURL: string = '') {
    super(baseURL);
  }

  async get<T>(
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryParams?: { [key: string]: any },
  ): Promise<T> {
    const headers = await this.getDefaultHeaders();

    const queryPath = Object.keys(queryParams ?? {}).reduce((params, key) => {
      return (
        params +
        `${params.endsWith('?') ? '' : '&'}${encodeURIComponent(key)}=${encodeURIComponent(
          queryParams?.[key],
        )}`
      );
    }, `${path}?`);

    try {
      const response = await fetch(this.baseURL + queryPath, {
        method: 'GET',
        headers,
      });
      if (!response.ok) throw { response };
      return (await response.json()) as T;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const headers = await this.getDefaultHeaders();

    try {
      const response = await fetch(this.baseURL + path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
      });
      if (!response.ok) throw { response };
      return (await response.json()) as T;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  put<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
