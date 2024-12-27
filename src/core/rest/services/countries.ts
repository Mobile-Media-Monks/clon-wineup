import endpoints from '../api';
import Config from 'react-native-config';
import { Client } from '@/core/rest/request-handler';
import { CountryResponse } from '@/core/@types/models/Country';

export const getAllCountries = async (): Promise<CountryResponse[]> => {
  const api = new Client(Config.BASE_URL);
  try {
    const response = await api.get<CountryResponse[]>(endpoints.COUNTRIES.ALL);
    return response;
  } catch (error) {
    throw new Error(error as string);
  }
};
