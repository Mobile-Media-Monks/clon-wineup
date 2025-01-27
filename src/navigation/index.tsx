import React from 'react';
import { RootNavigation } from '@/core/@types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './screens';
import Routes from './routes';

import { HomeStack } from './types';

const RootNavigationStack = createNativeStackNavigator<RootNavigation>();

const InitNavigation = createNativeStackNavigator<HomeStack>();

const InitStackNavigator = () => {
  return (
    <InitNavigation.Navigator>
      <InitNavigation.Screen
        name={Screens.Login}
        component={Routes[Screens.Login]}
        options={{ headerShown: false }}
      />
      <InitNavigation.Screen
        name={Screens.Home}
        component={Routes[Screens.Home]}
      />
    </InitNavigation.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <RootNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigationStack.Screen
        name={Screens.InitStack}
        component={InitStackNavigator}
      />
    </RootNavigationStack.Navigator>
  );
}
