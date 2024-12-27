import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { HomeFlowNavigation } from '../../types';
import Text from '@/presentation/components/Text';

type Props = NativeStackScreenProps<HomeFlowNavigation, 'Profile'>;

const ProfileScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
