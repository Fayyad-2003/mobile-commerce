import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import ImageSlider from '@coder-shubh/react-native-image-slider';
import { APP_COLORS } from '../constants';

type ImageSliderProp = {
  imageList: string[];
};

const { width } = Dimensions.get('window');

const ImageSliderComponent: React.FC<ImageSliderProp> = ({ imageList }) => {
  if (!imageList || imageList.length === 0) {
    return null;
  }

  return (
    <View>
      <ImageSlider
        testID="imageSlider_testID"
        images={imageList}
        imageHeight={250}
        dotSize={7}
        dotColor="silver"
        activeDotColor={APP_COLORS.accent}
        // showNavigationButtons
        // showIndicatorDots
        // imageLabel
        // label="Image Label"
        extrapolate="clamp"
        autoSlideInterval={5000}
        containerStyle={styles.container}
        radius={20}
        loop
      ></ImageSlider>
    </View>
  );
};

export default ImageSliderComponent;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBlockEnd: 20,
  },
  image: {
    width,
    height: 300,
  },
});
