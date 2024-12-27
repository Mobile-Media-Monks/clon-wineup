import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'i18next';
import { localization } from '@/domain/i18next';
import styles from './home.style';
import Config from 'react-native-config';
import { useHome } from './useHome';

const Home = () => {
  const { countries } = useHome();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{t(localization.home.title)}</Text>
      <Text>ENV: {Config.ENV}</Text>
      <Text style={styles.subtitle}>
        {t(localization.home.greeting, { name: 'John Doe' })}
      </Text>
      <Text style={styles.subtitle}>{countries[0]?.name.official}</Text>
    </View>
  );
};

export default Home;
