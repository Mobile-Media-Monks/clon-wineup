import AuthClientService from '@/core/rest/services/Auth';
import { UserRepository } from './types';
import { FireBaseClient } from '@/core/rest/request-handler/FirebaseClient';
import { TokenDataStore } from '@/core/store/types';
import { AuthUserResponse } from '@/core/@types/models/User';

export class UserRepositoryImpl implements UserRepository {
  private client = AuthClientService.instance;
  private firebaseClient = FireBaseClient.instance;

  constructor(private readonly tokenDataStore: TokenDataStore) {}

  async loginWithEmail(
    email: string,
    password: string,
  ): Promise<AuthUserResponse> {
    try {
      await this.firebaseClient.signIn(email, password);
      const firebaseToken = await this.firebaseClient.getToken();

      if (!firebaseToken) {
        throw new Error('Firebase token is not available');
      }

      const body = {
        'login-type': 'email',
        'login-data': {
          email,
          'firebase-token': firebaseToken,
          password,
        },
      };

      const response = await this.client.loginUser(body);
      this.tokenDataStore.saveToken(response);
      return response;
    } catch {
      throw new Error('Error loginWithEmail');
    }
  }

  async refreshToken(): Promise<AuthUserResponse> {
    try {
      const firebaseToken = await this.firebaseClient.getToken();
      const user = await this.firebaseClient.getCurrentUser();

      if (!firebaseToken || !user) {
        throw new Error('Firebase token or user data is not available');
      }

      const body = {
        'login-type': 'social-network',
        'login-data': {
          email: user.email,
          'firebase-token': firebaseToken,
        },
      };

      const response = await this.client.refreshToken(body);
      this.tokenDataStore.saveToken(response);
      return response;
    } catch {
      throw new Error('Error refreshToken');
    }
  }

  async logout(): Promise<boolean> {
    const token = this.tokenDataStore.getToken()?.logout_token;
    if (!token) {
      return false;
    }
    try {
      await this.firebaseClient.signOut();
      this.tokenDataStore.clearToken();
      await this.client.logout(token);
      return true;
    } catch (err) {
      console.log('Error logout', err);
      return false;
    }
  }
}
