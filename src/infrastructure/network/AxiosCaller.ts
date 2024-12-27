import Api from '@domain/types/network/Api';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export default class AxiosCaller implements Api {
  private readonly api: AxiosInstance;

  /**
   * Initialize the AxiosCaller instance.
   *
   * Create an instance of axios with a base URL of the environment variable
   * BASE_URL. Add request and response interceptors to log and retry failed
   * requests.
   */
  constructor() {
    this.api = axios.create({
      baseURL: Config.BASE_URL,
    });

    //TODO: Add  Request interceptors
    this.api.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => Promise.reject(error),
    );

    // TODO: Add Response interceptors
    this.api.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        if (error.response) {
          // TODO: Add error reporting
        }
        return Promise.reject(error.response);
      },
    );
  }

  /**
   * Send a GET request
   *
   * @param url - The URL to make the request to
   * @param config - The config options for the request
   * @returns The response of the request
   */
  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    console.log('entra al get', url, config);
    return this.api.get<T>(url, config);
  }

  /**
   * Send a POST request
   *
   * @param url - The URL to make the request to
   * @param data - The data to be sent as the request body
   * @param config - The config options for the request
   * @returns The response of the request
   */
  async post<T>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.api.post<T>(url, data, config);
  }

  /**
   * Send a PUT request
   *
   * @param url - The URL to make the request to
   * @param data - The data to be sent as the request body
   * @returns The response of the request
   */
  async put<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    return this.api.put<T>(url, data);
  }

  /**
   * Send a DELETE request
   *
   * @param url - The URL to make the request to
   * @param config - The config options for the request
   * @returns The response of the request
   */
  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(url, config);
  }

  /**
   * Send a PATCH request
   *
   * @param url - The URL to make the request to
   * @param data - The data to be sent as the request body
   * @param config - The config options for the request
   * @returns The response of the request
   */
  async patch<T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.api.patch<T>(url, data, config);
  }
}
