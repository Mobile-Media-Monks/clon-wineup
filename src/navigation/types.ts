import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screens from './screens';

export type HomeStack = {
  [Screens.Home]: undefined;
  [Screens.Login]: undefined;
};

export type ScreenProps<T extends keyof HomeStack> = NativeStackScreenProps<
  HomeStack,
  T
>;
