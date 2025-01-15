import dataStore from '../store';
import { CounterRepositoryImpl } from './Counter';
import { TokenRepositoryImpl } from './Token';
import { UserRepositoryImpl } from './User';

interface Repository {
  tokens: TokenRepositoryImpl;
  counter: CounterRepositoryImpl;
  user: UserRepositoryImpl;
}

const repositories: Repository = {
  tokens: new TokenRepositoryImpl(dataStore.tokenDataStore),
  counter: new CounterRepositoryImpl(dataStore.counterDataStore),
  user: new UserRepositoryImpl(dataStore.tokenDataStore),
};

export default repositories;
