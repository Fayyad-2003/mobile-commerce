import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { APP_COLORS } from '../constants';

type PaymentBoxType = {
  price: string | number;
  onPress: () => void;
  buttonTitle: string;
  loading: boolean;
};

const PaymentBox: React.FC<PaymentBoxType> = ({
  price,
  onPress,
  buttonTitle,
  loading,
}) => {
  return (
    <View style={styles.paymentBoxContainer}>
      <View style={styles.priceCotainer}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <TouchableOpacity
        style={[styles.buttonCotainer, loading && styles.buttonDisabled]}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={APP_COLORS.background} />
        ) : (
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PaymentBox;

const styles = StyleSheet.create({
  paymentBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 30,
    gap: 16,
  },
  priceCotainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  priceLabel: {
    color: APP_COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: APP_COLORS.textPrimary,
  },
  buttonCotainer: {
    backgroundColor: APP_COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 32,
    minWidth: 160,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: APP_COLORS.surface,
  },
});
