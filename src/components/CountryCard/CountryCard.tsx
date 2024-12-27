import React from 'react';
import { Text } from '@/components';
import { t } from 'i18next';
import { View } from 'react-native';
import { localization } from '@/core/i18next';
import _styles from './styles';
import FastImage from 'react-native-fast-image';
import { useStyles } from '@/theme/hooks/useStyles';
import Country from '@/core/@types/models/Country';

/**
 * CountryCard component
 * @param {{ country: Country }} props
 * @prop {Country} country The country to display
 * @returns {React.ReactElement} The CountryCard component
 */

const CountryCard = ({ country }: { country: Country }) => {
  const styles = useStyles(_styles);

  const { name, region, population, capital, flagUrl, languages } = country;
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <FastImage source={{ uri: flagUrl }} style={styles.flag} />
        <Text>{name}</Text>
      </View>
      <Text style={styles.region}>
        {t(localization.countries.region)}: {region}
      </Text>
      <Text style={styles.capital}>
        {t(localization.countries.capital)}: {capital}
      </Text>
      <Text style={styles.population}>
        {t(localization.countries.population)}: {population.toLocaleString()}
      </Text>
      <Text style={styles.population}>
        {t(localization.countries.languages)}:{' '}
        {languages.map(language => language).join(', ')}
      </Text>
    </View>
  );
};

export default CountryCard;
