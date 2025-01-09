import dataStore from '../store';
import { CounterRepositoryImpl } from './Counter';
import { TokenRepositoryImpl } from './Token';
import { UserRepositoryImpl } from './User';

interface Repository {
  token: TokenRepositoryImpl;
  counter: CounterRepositoryImpl;
  user: UserRepositoryImpl;
}

const repositories: Repository = {
  token: new TokenRepositoryImpl(dataStore.tokenDataStore),
  counter: new CounterRepositoryImpl(dataStore.counterDataStore),
  user: new UserRepositoryImpl(dataStore.userDataStore),
};

export default repositories;
