import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabsNavigation from './MainTabsNavigation';
import { RootStackParamList } from '../types';
import ProductDetails from './ProductDetails';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabsNavigation} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
