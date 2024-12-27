import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screens from '@domain/enum/Screens';
import routes from './routes';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME}>
        <Stack.Screen name={Screens.HOME} component={routes[Screens.HOME]} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
