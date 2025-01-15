import ZustandDataStore from './commons';

export interface CurrentUser {
  uid: string;
  roles: string[];
  name: string;
}

export interface TokenDataStoreState {
  current_user?: CurrentUser;
  access_token?: string;
  csrf_token?: string;
  logout_token?: string;
}

export type TokenDataStore = ZustandDataStore<TokenDataStoreState> & {
  getToken(): TokenDataStoreState | undefined;
  saveToken(token?: TokenDataStoreState): Promise<void>;
  clearToken(): Promise<void>;
};

export type CounterDataStore = ZustandDataStore<{
  count: number;
}> & {
  getCounter(): number;
  setCounter(count: number): void;
};
