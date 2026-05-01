import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
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
import ImageSlider from '../components/image-slider';
import { ArrowLeft } from 'lucide-react-native';
import { MotiView } from 'moti';

type ProductDetailsScreenProp = RouteProp<RootStackParamList, 'ProductDetails'>;
const ProductDetails = () => {
  const {
    params: { id },
  } = useRoute<ProductDetailsScreenProp>();

  const product = mockProducts.filter(p => p.id === +id)[0];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color={APP_COLORS.textPrimary} size={18} />
        </TouchableOpacity>
        <ImageSlider imageList={product.images || []} />

        <MotiView style={styles.ratingCointainer}></MotiView>
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
    borderWidth: 2,
    borderRadius: 50,
    top: 0,
    left: 15,
  },
  ratingCointainer: {
    marginHorizontal: 12,
  },
});
