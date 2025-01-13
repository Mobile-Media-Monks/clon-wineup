import { useCallback } from 'react';
// import { getAllCountries } from '@/core/rest/services/countries';
// import { transformCountries } from '@/core/transformers/countryTransformer';
//import Country from '@/core/@types/models/Country';
import repositories from '@/core/repositories';

export const useHome = () => {
  //const [countries, setCountries] = useState<Country[]>([]);
  const counter = repositories.counter.getCounter();

  const saveToken = useCallback(() => {
    repositories.tokens.saveToken(`Walter ${new Date().getTime()}`);
  }, []);

  const getToken = useCallback(async () => {
    const token = await repositories.tokens.getToken();
    console.log('token', token);
  }, []);

  const setCounter = useCallback(() => {
    repositories.counter.setCounter(counter + 1);
  }, [counter]);

  return {
    saveToken,
    getToken,
    counter,
    setCounter,
  };
};
