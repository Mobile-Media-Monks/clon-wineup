import { CurrentUser, TokenDataStoreState } from '../store/types';

export interface TokenRepository {
  getToken(): TokenDataStoreState | undefined;
  saveToken(token: TokenDataStoreState): void;
  getCurrentUserSelector(): CurrentUser | undefined;
}

export interface CounterRepository {
  getCounter(): number;
  setCounter(count: number): void;
}
