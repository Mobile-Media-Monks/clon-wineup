import { create } from 'zustand';
import { UserDataStore, UserDataStoreState } from './types';
import ZustandDataStore from './commons';
import { User } from '../@types/models/User';

export default class ZustandUserDataStoreImpl
  extends ZustandDataStore<UserDataStoreState>
  implements UserDataStore
{
  store = create<UserDataStoreState>(() => ({ user: undefined }));

  getUser(): User {
    const user = this.useStore(state => state?.user);
    if (!user) {
      throw new Error('User is undefined');
    }
    return user;
  }

  setUser(user: User): void {
    this.store.setState({ user });
  }
}
