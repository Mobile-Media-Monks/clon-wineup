import { TokenDataStore, TokenDataStoreState } from '../store/types';
import { TokenRepository } from './types';

export class TokenRepositoryImpl implements TokenRepository {
  constructor(private readonly tokenDataStore: TokenDataStore) {}

  async getToken(): Promise<TokenDataStoreState | undefined> {
    return this.tokenDataStore.getToken();
  }

  saveToken(token: TokenDataStoreState) {
    this.tokenDataStore.saveToken(token);
  }
}
