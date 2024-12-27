import { useEffect, useState } from 'react';
import { getAllCountries } from '@/infrastructure/services/countries';
import { CountryList } from '@/domain/types/countries/Countries';

export const useHome = () => {
  const [countries, setCountries] = useState<CountryList>([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesResponse = await getAllCountries();
      setCountries(countriesResponse);
    };
    getCountries();
  }, []);

  return {
    countries,
  };
};
