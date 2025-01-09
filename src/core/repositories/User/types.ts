import { User } from '@/core/@types/models/User';

export interface UserRepository {
  getUser(): User | undefined;
  loginWithEmail(email: string, password: string): Promise<User>;
}
