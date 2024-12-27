import endpoints from '../network/endpoints';
import Api from '@/domain/types/network/Api';
import Config from 'react-native-config';
import {
  resolveService,
  EXPOSED_SERVICES,
} from '../dependencyInjection/DIContainer';
import { CountryList } from '@/domain/types/countries/Countries';

export const getAllCountries = async (): Promise<CountryList> => {
  const api = resolveService<Api>(EXPOSED_SERVICES.DATABASE);

  try {
    const response = await api.get<CountryList>(
      Config.BASE_URL + endpoints.COUNTRIES.ALL,
    );
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};
