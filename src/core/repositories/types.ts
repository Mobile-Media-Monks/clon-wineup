import { TokenDataStoreState } from '../store/types';

export interface TokenRepository {
  getToken(): Promise<TokenDataStoreState | undefined>;
  saveToken(token: TokenDataStoreState): void;
}

export interface CounterRepository {
  getCounter(): number;
  setCounter(count: number): void;
}
