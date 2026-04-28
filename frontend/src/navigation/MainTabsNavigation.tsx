import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Cart from '../screens/cart';
import { TabNavigatorParamList } from '../types';
import CustomTabBar from '../components/CustomTabBar';

const MainTabsNavigation = () => {
  const Tab = createBottomTabNavigator<TabNavigatorParamList>();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => (
        <CustomTabBar
          data={[
            { label: 'Home', name: 'Home', route: 'Home' },
            { label: 'Cart', name: 'Cart', route: 'Cart' },
            { label: 'Profile', name: 'Profile', route: 'Profile' },
          ]}
          {...props}
        />
      )}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default MainTabsNavigation;
