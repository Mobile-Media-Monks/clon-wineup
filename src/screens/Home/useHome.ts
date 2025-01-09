import { useCallback, useEffect, useState } from 'react';
import { getAllCountries } from '@/core/rest/services/countries';
import { transformCountries } from '@/core/transformers/countryTransformer';
import Country from '@/core/@types/models/Country';
import repositories from '@/core/repositories';

export const useHome = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const counter = repositories.counter.getCounter();

  useEffect(() => {
    /**
     * Gets all countries from the API and transforms the response
     * into Country objects to be used in the Home screen.
     * @returns {Promise<void>} A promise that resolves when the countries are fetched.
     */
    const getCountries = async () => {
      try {
        const countriesResponse = await getAllCountries();
        const transformedCountries = transformCountries(countriesResponse);
        setCountries(transformedCountries);
      } catch (error) {
        console.error('Error in getCountries:', error);
        //TODO: Add error handling
      }
    };
    getCountries();
  }, []);

  const saveToken = useCallback(() => {
    repositories.token.saveToken(`Walter ${new Date().getTime()}`);
  }, []);

  const getToken = useCallback(async () => {
    const token = await repositories.token.getToken();
    console.log('token', token);
  }, []);

  const setCounter = useCallback(() => {
    repositories.counter.setCounter(counter + 1);
  }, [counter]);

  return {
    countries,
    saveToken,
    getToken,
    counter,
    setCounter,
  };
};
