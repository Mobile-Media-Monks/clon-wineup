import { CountryApi } from '@infrastructure/types/countryTypes';
import Country from '@domain/models/country';

/**
 * Transforms a CountryApi object into a Country object.
 *
 * @param {CountryApi} countryApi The country to transform
 * @returns {Country} The transformed country
 */
export const transformCountry = (countryApi: CountryApi): Country => ({
  name: countryApi?.name?.common ?? 'Unknown',
  region: countryApi?.region ?? 'Unknown',
  population: countryApi?.population ?? 0,
  languages: Object.values(countryApi?.languages || {}),
  capital: countryApi.capital?.[0] ?? 'Unknown',
  flagUrl: countryApi?.flags?.png ?? '',
});

export const transformCountries = (countriesApi: CountryApi[]): Country[] =>
  countriesApi.map(transformCountry);
