import { useEffect, useState } from 'react';
import { HomeFlowNavigation } from '../../types';
import { CountryList } from '@/domain/types/countries/Countries';
import { getAllCountries } from '@/infrastructure/services/countries';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Params = {
  navigation: NativeStackNavigationProp<HomeFlowNavigation, 'Home'>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useHomeController = ({ navigation }: Params) => {
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
