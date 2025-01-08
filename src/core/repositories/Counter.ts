import { CounterDataStore } from '@/core/store/types';
import { CounterRepository } from './types';

export class CounterRepositoryImpl implements CounterRepository {
  constructor(private readonly counterDataStore: CounterDataStore) {}

  getCounter(): number {
    return this.counterDataStore.getCounter();
  }

  async setCounter(count: number): Promise<void> {
    return this.counterDataStore.setCounter(count);
  }
}
