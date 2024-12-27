interface CountryTranslation {
  official: string;
  common: string;
}

interface CountryLanguages {
  [key: string]: string;
}

interface CountryCurrencies {
  [code: string]: {
    name: string;
    symbol: string;
  };
}

interface CountryIDD {
  root: string;
  suffixes: string[];
}

interface CountryCapitalInfo {
  latlng: [number, number];
}

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: CountryCurrencies;
  idd: CountryIDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: CountryLanguages;
  translations: {
    [lang: string]: CountryTranslation;
  };
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms?: object;
  startOfWeek: string;
  capitalInfo: CountryCapitalInfo;
}

export type CountryList = Country[];
