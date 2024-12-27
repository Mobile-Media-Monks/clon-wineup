import React from 'react';
import { HomeFlowNavigation } from './flows';
import { RootNavigation } from '@/application/@types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootNavigationStack = createNativeStackNavigator<RootNavigation>();

export default function AppNavigation() {
  return (
    <RootNavigationStack.Navigator
      initialRouteName="FlowHome"
      screenOptions={{ headerShown: false }}>
      <RootNavigationStack.Screen
        name="FlowHome"
        component={HomeFlowNavigation}
      />
    </RootNavigationStack.Navigator>
  );
}
