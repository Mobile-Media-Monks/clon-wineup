import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'i18next';
import { localization } from '@/application/i18next';
import styles from './style';
import Config from 'react-native-config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useHomeController } from './useHomeController';
import { HomeFlowNavigation } from '../../types';

type Props = NativeStackScreenProps<HomeFlowNavigation, 'Home'>;

const Home: React.FC<Props> = props => {
  const { countries } = useHomeController(props);
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
