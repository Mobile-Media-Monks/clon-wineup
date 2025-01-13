import dataStore from '../store';
import { CounterRepositoryImpl } from './Counter';
import { TokenRepositoryImpl } from './Token';

interface Repository {
  tokens: TokenRepositoryImpl;
  counter: CounterRepositoryImpl;
}

const repositories: Repository = {
  tokens: new TokenRepositoryImpl(dataStore.tokenDataStore),
  counter: new CounterRepositoryImpl(dataStore.counterDataStore),
};

export default repositories;
