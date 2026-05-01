import { RouteProp, useRoute } from '@react-navigation/native';
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

type ProductDetailsScreenProp = RouteProp<RootStackParamList, 'ProductDetails'>;
const ProductDetails = () => {
  const {
    params: { id },
  } = useRoute<ProductDetailsScreenProp>();

  const product = mockProducts.filter(p => p.id === +id)[0];
  console.log(product);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <TouchableOpacity>
          <ArrowLeft color={APP_COLORS.textPrimary} size={18} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: APP_COLORS.textPrimary }}>{product.title}</Text>
        </View>

        <ImageSlider></ImageSlider>
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
});
