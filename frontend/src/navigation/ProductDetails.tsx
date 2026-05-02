import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { RootStackParamList } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { APP_COLORS, mockProducts } from '../constants';
import ImageSlider from '../components/ImageSlider';
import { ArrowLeft, Star } from 'lucide-react-native';
import { MotiText, MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';
import PaymentBox from '../components/PaymentBox';

type ProductDetailsScreenProp = RouteProp<RootStackParamList, 'ProductDetails'>;
const ProductDetails = () => {
  const {
    params: { id },
  } = useRoute<ProductDetailsScreenProp>();

  const product = mockProducts.filter(p => p.id === +id)[0];
  const navigation = useNavigation();

  const animatedTitle = [...product.title.split(' '), '"'].filter(
    word => word !== '"',
  );

  const [selectedPrice, setSelectedPrice] = useState(product.prices[0]);
  const [contentAnimated, setContentAnimated] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 50 }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft color={APP_COLORS.textPrimary} size={18} />
          </TouchableOpacity>
        </MotiView>

        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration: 700, delay: 150 }}
        >
          <ImageSlider imageList={product.images || []} />
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'timing', duration: 600, delay: 300 }}
        >
          <View style={styles.ratingCointainer}>
            <View style={styles.ratingBox}>
              <Star
                color={APP_COLORS.accent}
                fill={APP_COLORS.accent}
                size={20}
              />

              <Text style={styles.rating}>{product.rating}</Text>
            </View>
          </View>
        </MotiView>

        <View style={styles.containerTitle}>
          {animatedTitle.map((item, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 15 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'timing',
                duration: 550,
                delay: 450 + index * 80,
              }}
            >
              <Text style={styles.header}>{item}</Text>
            </MotiView>
          ))}
        </View>

        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'timing',
            duration: 600,
            delay: 700 + animatedTitle.length * 80,
          }}
        >
          <View style={styles.descriptionCotianer}>
            <MotiText style={styles.descriptionLabel}>Description</MotiText>
            <MotiText style={styles.description}>
              {product.description}
            </MotiText>
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'timing',
            duration: 600,
            delay: 900 + animatedTitle.length * 80,
          }}
        >
          <View style={styles.pricesContainer}>
            {product.prices.map((p, i) => (
              <MotiPressable
                key={i}
                from={{ opacity: 0, scale: 0.85, translateY: 10 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{
                  type: 'timing',
                  duration: 550,
                  delay: 950 + animatedTitle.length * 80 + i * 80,
                }}
                style={[
                  styles.sizeBox,
                  {
                    backgroundColor:
                      p.size === selectedPrice.size
                        ? APP_COLORS.accentSoft
                        : APP_COLORS.backgroundSoft,
                  },
                ]}
                onPress={() => {
                  setSelectedPrice(p);
                }}
              >
                <Text
                  style={[
                    styles.sizeTextBox,
                    {
                      color:
                        p.size === selectedPrice.size
                          ? APP_COLORS.accent
                          : APP_COLORS.textPrimary,
                    },
                  ]}
                >
                  {p.size}
                </Text>
              </MotiPressable>
            ))}
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'timing',
            duration: 600,
            delay:
              1100 + animatedTitle.length * 80 + product.prices.length * 80,
          }}
        >
          <PaymentBox
            price={selectedPrice.price}
            buttonTitle="ADD To Cart"
            onPress={() => {}}
            loading={false}
          />
        </MotiView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
  },
  scrollView: {
    flex: 1,
    flexGrow: 1,
    minHeight: Dimensions.get('window').height,
  },
  backButton: {
    marginTop: 10,
    position: 'absolute',
    padding: 12,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: APP_COLORS.accentSoft,
    borderColor: APP_COLORS.textPrimary,
    top: 0,
    left: 15,
  },
  ratingCointainer: {
    marginHorizontal: 16,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  ratingBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  rating: {
    color: APP_COLORS.textSecondary,
    fontWeight: 500,
  },
  header: {
    fontSize: 30,
    color: APP_COLORS.textPrimary,
    paddingLeft: 0,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 36,
    marginRight: 8,
  },
  containerTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  descriptionCotianer: {
    paddingLeft: 40,
  },
  descriptionLabel: {
    fontSize: 12,
    color: APP_COLORS.textSecondary,
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    color: APP_COLORS.textPrimary,
    marginTop: 2,
    fontWeight: 600,
    letterSpacing: 0.1,
  },
  pricesContainer: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 10,
    paddingLeft: 25,
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
  sizeBox: {
    backgroundColor: APP_COLORS.backgroundSoft,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width * 0.3,
  },
  sizeTextBox: {
    color: APP_COLORS.textPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
});
