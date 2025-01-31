import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Screens from './screens';
import { RootNavigation } from '@/core/@types/navigation';

export type HomeStack = {
  [Screens.Home]: undefined;
};

export type AuthStack = {
  [Screens.Login]: undefined;
};

export type ScreenProps<T extends keyof RootNavigation> =
  NativeStackScreenProps<RootNavigation, T>;
