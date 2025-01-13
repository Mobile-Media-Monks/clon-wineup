import { create } from 'zustand';
import { TokenDataStore, TokenDataStoreState } from './types';
import ZustandDataStore from './commons';

export default class ZustandTokenDataStoreImpl
  extends ZustandDataStore<TokenDataStoreState>
  implements TokenDataStore
{
  store = create(
    this.createPersistableState('token-persistor', () => ({
      current_user: undefined,
      access_token: undefined,
      csrf_token: undefined,
      logout_token: undefined,
    })),
  );

  public async getToken(): Promise<TokenDataStoreState | undefined> {
    return this.useStore(state => state);
  }

  public async saveToken(token: TokenDataStoreState | object) {
    this.store.setState(token);
  }
}
