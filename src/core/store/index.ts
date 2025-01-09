import ZustandCounterDataStoreImpl from './Counter';
import ZustandTokenDataStoreImpl from './Token';

import { CounterDataStore, TokenDataStore, UserDataStore } from './types';
import ZustandUserDataStoreImpl from './User';

interface DataStore {
  tokenDataStore: TokenDataStore;
  counterDataStore: CounterDataStore;
  userDataStore: UserDataStore;
}

const dataStore: DataStore = {
  tokenDataStore: new ZustandTokenDataStoreImpl(),
  counterDataStore: new ZustandCounterDataStoreImpl(),
  userDataStore: new ZustandUserDataStoreImpl(),
};

export default dataStore;
