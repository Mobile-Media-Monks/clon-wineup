import ZustandCounterDataStoreImpl from './Counter';
import ZustandTokenDataStoreImpl from './Token';
import { CounterDataStore, TokenDataStore } from './types';

interface DataStore {
  tokenDataStore: TokenDataStore;
  counterDataStore: CounterDataStore;
}

const dataStore: DataStore = {
  tokenDataStore: new ZustandTokenDataStoreImpl(),
  counterDataStore: new ZustandCounterDataStoreImpl(),
};

export default dataStore;
