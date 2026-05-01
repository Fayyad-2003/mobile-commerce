import React from 'react';
import { House, ShoppingCart, User } from 'lucide-react-native';
import { Dimensions, Pressable, StyleSheet, View, Text } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MotiView } from 'moti';
import Animated, {
  FadeInUp,
  FadeOutDown,
  LinearTransition,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLORS, { APP_COLORS } from '../constants/index';
import type { TabNavigatorParamList } from '../types';

const TAB_PALETTE = {
  container:
    (COLORS && COLORS.dark && COLORS.dark.background) || APP_COLORS.background,
  border: APP_COLORS?.border || 'rgba(224, 224, 224, 0.08)',
  idle: 'rgba(44, 62, 80, 0.04)',
  selected: 'rgba(52, 152, 219, 0.18)',
  selectedStrong: 'rgba(52, 152, 219, 0.28)',
  selectedIcon: APP_COLORS?.accent || '#3498DB',
  idleIcon: 'rgba(44, 62, 80, 0.72)',
  selectedText: APP_COLORS?.backgroundSoft || '#F0F2F4',
};

const iconMap = {
  Home: House,
  Profile: User,
  Cart: ShoppingCart,
};

type iconName = keyof typeof iconMap;

type IconProps = {
  name: iconName;
  color: string;
  size?: number;
};

type dataItem = {
  label: string;
  route: keyof TabNavigatorParamList;
  name: iconName;
};

type CustomTabBarType = BottomTabBarProps & {
  data: dataItem[];
};

function Icon({ name, color, size }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent color={color} size={size} />;
}

const CustomTabBar: React.FC<CustomTabBarType> = ({
  data,
  navigation,
  state,
}) => {
  const { bottom } = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const activeRoute = state.routes[state.index]?.name;

  return (
    <View
      style={[
        styles.container,
        { marginBottom: bottom + 4, marginHorizontal: width * 0.05 },
      ]}
    >
      {data.map(item => {
        const isSelected = activeRoute === item.route;
        const isCart = item.route === 'Cart';

        return (
          <MotiView
            key={item.route}
            layout={LinearTransition.springify().damping(20).stiffness(180)}
            animate={{
              scale: isSelected ? 1.04 : 1,
              translateY: isSelected ? -3 : 0,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            style={styles.itemView}
          >
            <Pressable
              onPress={() => {
                const route = state.routes.find(
                  routeItem => routeItem.name === item.route,
                );
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route?.key,
                  canPreventDefault: true,
                }) as { defaultPrevented?: boolean };

                if (!isSelected && !event.defaultPrevented) {
                  navigation.navigate(item.route);
                }
              }}
              accessibilityRole="button"
              accessibilityState={isSelected ? { selected: true } : {}}
              style={[
                styles.button,
                isCart && styles.cartButton,
                isSelected ? styles.buttonSelected : styles.buttonIdle,
              ]}
            >
              <Icon
                name={item.name}
                color={
                  isSelected ? TAB_PALETTE.selectedIcon : TAB_PALETTE.idleIcon
                }
                size={isCart ? 25 : 24}
              />
              {isCart && (
                <View style={styles.cartItemsCount}>
                  <Text style={styles.cartItemsCountText}>0</Text>
                </View>
              )}
              {isSelected && (
                <Animated.Text
                  entering={FadeInUp.duration(60)}
                  exiting={FadeOutDown.duration(30)}
                  style={styles.text}
                >
                  {item.label}
                </Animated.Text>
              )}
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: TAB_PALETTE.container,
    borderRadius: 50,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: TAB_PALETTE.border,
    shadowColor: '#000',
    shadowOpacity: 0.28,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 12 },
    elevation: 18,
    position: 'relative',
  },
  itemView: {
    overflow: 'hidden',
    flex: 1,
    marginHorizontal: 4,
    position: 'relative',
  },
  button: {
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 11,
    paddingHorizontal: 12,
    gap: 8,
    minHeight: 50,
  },
  buttonIdle: {
    // backgroundColor: TAB_PALETTE.idle,
  },
  buttonSelected: {
    backgroundColor: TAB_PALETTE.selected,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  cartButton: {
    paddingHorizontal: 14,
    minHeight: 52,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
    color: TAB_PALETTE.selectedText,
  },
  cartItemsCount: {
    position: 'absolute',
    top: 0,
    right: 4,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#FF5252',
    zIndex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  cartItemsCountText: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
