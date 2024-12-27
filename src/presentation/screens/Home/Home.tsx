import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'i18next';
import { localization } from '@/domain/i18next';
import styles from './home.style';

const Home = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{t(localization.home.title)}</Text>
      <Text style={styles.subtitle}>
        {t(localization.home.greeting, { name: 'John Doe' })}
      </Text>
    </View>
  );
};

export default Home;
