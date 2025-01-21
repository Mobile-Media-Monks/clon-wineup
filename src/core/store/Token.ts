import { create } from 'zustand';
import { TokenDataStore, TokenDataStoreState } from './types';
import ZustandDataStore from './commons';

export default class ZustandTokenDataStoreImpl
  extends ZustandDataStore<TokenDataStoreState>
  implements TokenDataStore
{
  initialState: TokenDataStoreState = {
    current_user: undefined,
    access_token: undefined,
    csrf_token: undefined,
    logout_token: undefined,
  };

  store = create(
    this.createPersistableState('token-persistor', () => this.initialState),
  );

  public getToken(): TokenDataStoreState {
    return this.store.getState();
  }

  public async saveToken(token?: TokenDataStoreState) {
    this.store.setState(token ?? {});
  }

  public async clearToken() {
    this.store.setState(this.initialState);
  }
}
