/* eslint-disable @typescript-eslint/no-explicit-any */

import endpoints from '@/core/rest/api';
import { Client } from '../../request-handler';
import { AuthUserResponse } from '@/core/@types/models/User';

export interface AuthClient {
  loginUser(payload: {
    email: string;
    password: string;
    token: string;
  }): Promise<AuthUserResponse>;

  refreshToken(payload: {
    email: string;
    token: string;
  }): Promise<AuthUserResponse>;

  logout(token: string): Promise<boolean>;
}

export default class AuthClientService implements AuthClient {
  static instance = new AuthClientService();
  private client = new Client();

  async loginUser(payload: { [key: string]: any }): Promise<AuthUserResponse> {
    return await this.client.post<AuthUserResponse>(
      endpoints.CMS.LOGIN_FIREBASE,
      payload,
    );
  }

  async refreshToken(payload: {
    [key: string]: any;
  }): Promise<AuthUserResponse> {
    return await this.client.post<AuthUserResponse>(
      endpoints.CMS.LOGIN_FIREBASE,
      payload,
    );
  }

  async logout(token: string): Promise<boolean> {
    return this.client.post(endpoints.CMS.LOGOUT(token), {});
  }
}
