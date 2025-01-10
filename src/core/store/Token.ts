import { create } from 'zustand';
import { TokenDataStore, TokenDataStoreState } from './types';
import ZustandDataStore from './commons';

export default class ZustandTokenDataStoreImpl
  extends ZustandDataStore<TokenDataStoreState>
  implements TokenDataStore
{
  store = create(
    this.createPersistableState('token-persistor', () => ({
      token: undefined,
    })),
  );

  public async getToken(): Promise<string | undefined> {
    return this.useStore(state => state.token);
  }

  public async saveToken(token: string) {
    this.store.setState({ token });
  }
}
