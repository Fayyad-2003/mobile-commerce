import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import React from 'react';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import { TabNavigatorParamList } from '../types';

const MainTabsNavigation = () => {
  const Tab = createNativeBottomTabNavigator<TabNavigatorParamList>();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default MainTabsNavigation;
