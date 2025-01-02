import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateCreator, StoreApi, UseBoundStore } from 'zustand';
import { persist, StorageValue } from 'zustand/middleware';

export default abstract class ZustandDataStore<T extends object> {
  protected abstract store: UseBoundStore<StoreApi<T>>;

  public get useStore() {
    return this.store;
  }

  protected createPersistableState(name: string, state: StateCreator<T>) {
    return persist(state, {
      name,
      storage: {
        getItem: this.getItem,
        setItem: this.setItem,
        removeItem: this.removeItem,
      },
    });
  }

  protected async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
  }

  protected async getItem(key: string): Promise<StorageValue<T>> {
    const data = await AsyncStorage.getItem(key);
    return {
      state: JSON.parse(data ?? '{}') as T,
    };
  }

  protected async setItem(key: string, value: StorageValue<T>) {
    await AsyncStorage.setItem(key, JSON.stringify(value.state));
  }
}
