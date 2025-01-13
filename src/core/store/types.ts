import ZustandDataStore from './commons';

export interface CurrentUser {
  uid: string;
  roles: string[];
  name: string;
}

export interface TokenDataStoreState {
  current_user: CurrentUser | undefined;
  access_token: string | undefined;
  csrf_token: string | undefined;
  logout_token: string | undefined;
}

export type TokenDataStore = ZustandDataStore<TokenDataStoreState> & {
  getToken(): TokenDataStoreState | undefined;
  saveToken(token: TokenDataStoreState): Promise<void>;
};

export type CounterDataStore = ZustandDataStore<{
  count: number;
}> & {
  getCounter(): number;
  setCounter(count: number): void;
};
