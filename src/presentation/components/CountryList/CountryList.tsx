import React from 'react';
import { FlatList } from 'react-native';
import Country from '@domain/models/country';
import CountryCard from '@presentation/components/CountryCard/CountryCard';
import styles from './countryList.style';

/**
 * CountryList component
 *
 * @param {Object} props - Component props
 * @param {Country[]} props.countries - Array of countries to be displayed
 *
 * @returns {React.ReactElement} A FlatList of CountryCard components
 */
const CountryList = ({ countries }: { countries: Country[] }) => (
  <FlatList
    data={countries}
    keyExtractor={(item, index) => item.name + index}
    renderItem={({ item }) => <CountryCard country={item} />}
    contentContainerStyle={styles.container}
  />
);

export default CountryList;
