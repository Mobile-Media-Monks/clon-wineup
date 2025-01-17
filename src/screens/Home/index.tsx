import React from 'react';
import { t } from 'i18next';
import styles from './styles';
import { Pressable, View } from 'react-native';
import { useHome } from './useHome';
import Config from 'react-native-config';
import { CountryList, Text } from '@/components';
import { localization } from '@/core/i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AllNavigation } from '@/core/@types/navigation';
import Screens from '../../navigation/screens';

type Props = NativeStackScreenProps<AllNavigation, Screens.Home>;

const Home: React.FC<Props> = () => {
  const { countries, saveToken, getToken, counter, setCounter } = useHome();

  return (
    <View style={styles.content}>
      <Pressable onPress={setCounter}>
        <Text variant="title-primary-h3">Counter {counter}</Text>
      </Pressable>
      <Pressable onPress={saveToken}>
        <Text variant="title-primary-h3">Save Token</Text>
      </Pressable>
      <Pressable onPress={getToken}>
        <Text variant="title-primary-h3">Get token</Text>
      </Pressable>
      <Text variant="regular-primary-p">ENV: {Config.ENV}</Text>
      <Text variant="title-primary-h5">
        {t(localization.home.greeting, { name: 'John Doe' })}
      </Text>
      {countries.length > 0 && <CountryList countries={countries} />}
    </View>
  );
};

export default Home;
