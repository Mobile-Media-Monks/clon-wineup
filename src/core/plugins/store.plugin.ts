import { MMKV } from 'react-native-mmkv';
import { PersistStorage, StorageValue } from 'zustand/middleware';

export const mmkv = new MMKV();

export const storagePlugin = <T>(): PersistStorage<T> => {
  return {
    getItem: <T>(key: string): StorageValue<T> => {
      try {
        const value = mmkv.getString(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error('Error al obtener valor de MMKV:', error);
        return { state: null as T };
      }
    },
    setItem: <T>(key: string, value: StorageValue<T>): void => {
      try {
        mmkv.set(key, JSON.stringify(value));
      } catch (error) {
        console.error('Error al guardar valor en MMKV:', error);
      }
    },
    removeItem: (key: string): void => {
      try {
        mmkv.delete(key);
      } catch (error) {
        console.error('Error al eliminar valor de MMKV:', error);
      }
    },
  };
};

export default storagePlugin;
