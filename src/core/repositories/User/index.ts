import { UserDataStore } from '@/core/store/types';
import { UserRepository } from './types';
import { User } from '@/core/@types/models/User';

export class UserRepositoryImpl implements UserRepository {
  // private client = UserRestClient
  constructor(private readonly userDataStore: UserDataStore) {}

  loginWithEmail(email: string, password: string): Promise<User> {
    // Realizar la llamada a la API y guardar el usuario en el store
    // this.userDataStore.setUser({})
    throw new Error(`Method not implemented ${email} ${password}`);
  }

  getUser(): User | undefined {
    return this.userDataStore.getUser();
  }
}
