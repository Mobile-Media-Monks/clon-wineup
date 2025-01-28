import React from 'react';
import { RootNavigation } from '@/core/@types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from './screens';
import Routes from './routes';

import { AuthStack, HomeStack } from './types';
import { useAuth } from '@/hooks/useAuth';

const RootNavigationStack = createNativeStackNavigator<RootNavigation>();

const AuthNavigation = createNativeStackNavigator<AuthStack>();
const HomeNavigation = createNativeStackNavigator<HomeStack>();

const AuthStackNavigator = () => {
  return (
    <AuthNavigation.Navigator>
      <AuthNavigation.Screen
        name={Screens.Login}
        component={Routes[Screens.Login]}
        options={{ headerShown: false }}
      />
    </AuthNavigation.Navigator>
  );
};
const HomeStackNavigator = () => {
  return (
    <HomeNavigation.Navigator>
      <HomeNavigation.Screen
        name={Screens.Home}
        component={Routes[Screens.Home]}
      />
    </HomeNavigation.Navigator>
  );
};

export default function AppNavigation() {
  const { user } = useAuth();
  const isAuthenticated = Boolean(user?.current_user);

  return (
    <RootNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootNavigationStack.Screen
          name={Screens.HomeStack}
          component={HomeStackNavigator}
        />
      ) : (
        <RootNavigationStack.Screen
          name={Screens.AuthStack}
          component={AuthStackNavigator}
        />
      )}
    </RootNavigationStack.Navigator>
  );
}
