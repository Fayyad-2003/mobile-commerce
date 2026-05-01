import React from 'react';
import { ProductCardType } from '../types';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { APP_COLORS } from '../constants';
import { Plus, Star } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40 - 15) / 2;

const ProductCard: React.FC<ProductCardType> = ({
  id,
  title,
  image,
  brand,
  descirption,
  prices,
  rating,
  currency = '$',
  onPress,
}) => {
  const displayPrice = prices && prices.length > 0 ? prices[0].price : null;
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  return (
    <LinearGradient
      colors={[APP_COLORS.backgroundSoft, APP_COLORS.backgroundSoft]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={{ uri: image }}
        style={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.ratingContainer}>
          <Star color={'#FFD700'} fill={'#FFD700'} size={12} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </ImageBackground>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>
          {title.length > 22 ? title.slice(0, 22) + '...' : title}
        </Text>
        <Text style={styles.brand}>{brand}</Text>
        <View style={styles.priceContiainer}>
          {displayPrice !== null && (
            <Text style={styles.price}>
              {currency}
              {displayPrice}
            </Text>
          )}
          <AnimatedTouchableOpacity
            style={[animatedStyle, styles.increaseButton]}
          >
            <Plus color={APP_COLORS.background} size={16} />
          </AnimatedTouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  linearGradient: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: CARD_WIDTH,
    height: 270,
    display: 'flex',
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 4,
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  rating: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: APP_COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  brand: {
    color: APP_COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 8,
  },
  priceContiainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  price: {
    color: APP_COLORS.accent,
    fontSize: 15,
    fontWeight: '700',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  detailsWrapper: {
    flex: 1,
    display: 'flex',
  },
  increaseButton: {
    backgroundColor: APP_COLORS.textPrimary,
    padding: 5,
    borderRadius: 8,
  },
});
