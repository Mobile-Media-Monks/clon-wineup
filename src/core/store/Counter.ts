import { create } from 'zustand';
import { CounterDataStore } from './types';
import ZustandDataStore from './commons';

export default class ZustandCounterDataStoreImpl
  extends ZustandDataStore<{
    count: number;
  }>
  implements CounterDataStore
{
  store = create<{ count: number }>(() => ({ count: 0 }));

  public getCounter() {
    return this.useStore(state => state.count);
  }

  public async setCounter(count: number) {
    this.store.setState({ count });
  }
}
