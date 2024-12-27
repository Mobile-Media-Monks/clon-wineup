import React from 'react';
import styles from './styles';
import { FlatList } from 'react-native';
import Country from '@/core/@types/models/Country';
import CountryCard from '@/components/CountryCard/CountryCard';

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
