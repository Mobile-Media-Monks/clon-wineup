import storagePlugin from '@/core/plugins/store.plugin';
import { StateCreator, StoreApi, UseBoundStore } from 'zustand';
import { persist } from 'zustand/middleware';

export default abstract class ZustandDataStore<T extends object> {
  protected abstract store: UseBoundStore<StoreApi<T>>;

  public get useStore() {
    return this.store;
  }

  protected createPersistableState(name: string, state: StateCreator<T>) {
    return persist(state, {
      name,
      storage: storagePlugin<T>(),
    });
  }
}
