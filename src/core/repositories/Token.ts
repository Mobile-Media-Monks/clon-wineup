import { TokenDataStore } from '../store/types';
import { TokenRepository } from './types';

export class TokenRepositoryImpl implements TokenRepository {
  constructor(private readonly tokenDataStore: TokenDataStore) {}

  async getToken(): Promise<string | undefined> {
    return this.tokenDataStore.getToken();
  }

  saveToken(token: string) {
    this.tokenDataStore.saveToken(token);
  }
}
