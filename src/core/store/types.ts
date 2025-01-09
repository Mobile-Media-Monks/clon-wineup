import { User } from '../@types/models/User';
import ZustandDataStore from './commons';

export type TokenDataStoreState = {
  token?: string;
};

export type TokenDataStore = ZustandDataStore<TokenDataStoreState> & {
  getToken(): Promise<string | undefined>;
  saveToken(token: string): Promise<void>;
};

export type CounterDataStore = ZustandDataStore<{
  count: number;
}> & {
  getCounter(): number;
  setCounter(count: number): void;
};

export type UserDataStoreState = {
  user?: User;
};

export type UserDataStore = ZustandDataStore<UserDataStoreState> & {
  getUser(): User | undefined;
  setUser(user: User): void;
};
