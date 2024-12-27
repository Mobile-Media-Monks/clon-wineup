import { useEffect, useState } from 'react';
import { getAllCountries } from '@/core/rest/services/countries';
import { transformCountries } from '@/core/transformers/countryTransformer';
import Country from '@/core/@types/models/Country';

export const useHome = () => {
  const [countries, setCountries] = useState<Country[]>([]);

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

  return {
    countries,
  };
};