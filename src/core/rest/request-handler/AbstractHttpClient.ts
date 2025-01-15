export abstract class AbstractHttpClient {
  protected baseURL: string = '';

  constructor(baseURL?: string) {
    this.baseURL = baseURL || (process.env.BASE_URL as string);
  }

  abstract get<T>(
    path: string,
    queryParams?: { [key: string]: unknown },
    config?: unknown,
  ): Promise<T>;
  abstract post<T>(path: string, body: unknown, config?: unknown): Promise<T>;
  abstract put<T>(path: string, body: unknown, config?: unknown): Promise<T>;
  abstract delete<T>(path: string, config?: unknown): Promise<T>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  protected getDefaultHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    return headers;
  }
}
