import { AuthUserResponse } from '@/core/@types/models/User';

export interface UserRepository {
  loginWithEmail(email: string, password: string): Promise<AuthUserResponse>;
  refreshToken(email: string, token: string): Promise<AuthUserResponse>;
  logout(): Promise<boolean>;
}
