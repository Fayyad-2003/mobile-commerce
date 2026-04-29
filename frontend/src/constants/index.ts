const tintColorLight = '#C48A00';
const tintColorDark = '#FFF4CC';

export const APP_COLORS = {
  background: '#fdf4ca',
  backgroundSoft: '#eedfa9',
  surface: '#FFFBEE',
  textPrimary: '#f2a725',
  textSecondary: '#6E5600',
  accent: '#C48A00',
  accentSoft: '#E8B93A',
  border: '#D9B44A',
};

export default {
  light: {
    text: APP_COLORS.textPrimary,
    background: APP_COLORS.background,
    tint: tintColorLight,
    tabIconDefault: APP_COLORS.textSecondary,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: APP_COLORS.backgroundSoft,
    background: '#231A00',
    tint: tintColorDark,
    tabIconDefault: APP_COLORS.accentSoft,
    tabIconSelected: tintColorDark,
  },
};

// Colors.ts

const DarkModeColors = {
  primary: '#1A1A1A',
  secondary: '#4D4D4D',
  accent: '#A6A6A6',
};

const LightModeColors = {
  primary: '#FFFFFF',
  secondary: '#F2F2F2',
  accent: '#CCCCCC',
};

// Define additional color schemes if needed

const VeryDarkModeColors = {
  primary: '#101010',
  secondary: '#424242',
  accent: '#BDBDBD',
};

const LightGrayModeColors = {
  primary: '#333333',
  secondary: '#666666',
  accent: '#CCCCCC',
};

const VeryLightGrayModeColors = {
  primary: '#F5F5F5',
  secondary: '#CCCCCC',
  accent: '#666666',
};

const MediumLightGrayModeColors = {
  primary: '#E0E0E0',
  secondary: '#B3B3B3',
  accent: '#333333',
};

export {
  DarkModeColors,
  LightModeColors,
  VeryDarkModeColors,
  LightGrayModeColors,
  VeryLightGrayModeColors,
  MediumLightGrayModeColors,
};

export const homeTitle = 'Find Your Favorite Fit And Wear It Now';

export const mockProducts = [
  {
    id: 0,
    title: 'Camera',
    description: 'A New Version of Canon',
    image: '/images/',
    price: 33,
    rating: 3.2,
  },
  {
    id: 1,
    title: 'Books Shelf',
    description: 'Modern Book Shelf',
    image: '/images/',
    price: 22,
    rating: 4.3,
  },
];

export const mockCategories = ['Clothes', 'Phones', 'Toyes', 'Plants'];
