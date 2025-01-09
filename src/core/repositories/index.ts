import dataStore from '../store';
import { CounterRepositoryImpl } from './Counter';
import { TokenRepositoryImpl } from './Token';

interface Repository {
  token: TokenRepositoryImpl;
  counter: CounterRepositoryImpl;
}

const repositories: Repository = {
  token: new TokenRepositoryImpl(dataStore.tokenDataStore),
  counter: new CounterRepositoryImpl(dataStore.counterDataStore),
};

export default repositories;
