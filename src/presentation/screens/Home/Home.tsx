import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'i18next';
import { localization } from '@/infrastructure/i18next';
import styles from './home.style';
import Config from 'react-native-config';
import { useHome } from './useHome';
import { CountryList } from '@/presentation/components';

const Home = () => {
  const { countries } = useHome();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{t(localization.home.title)}</Text>
      <Text>ENV: {Config.ENV}</Text>
      <Text style={styles.subtitle}>
        {t(localization.home.greeting, { name: 'John Doe' })}
      </Text>
      {countries.length > 0 && <CountryList countries={countries} />}
    </View>
  );
};

export default Home;
