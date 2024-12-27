import React from 'react';
import { HomeFlowNavigation } from '../types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Profile';
import HomeScreen from './Home';

const FlowNavigation = createNativeStackNavigator<HomeFlowNavigation>();

const FlowNavigator = () => {
  return (
    <FlowNavigation.Navigator>
      <FlowNavigation.Screen name="Home" component={HomeScreen} />
      <FlowNavigation.Screen name="Profile" component={ProfileScreen} />
    </FlowNavigation.Navigator>
  );
};

export default FlowNavigator;
