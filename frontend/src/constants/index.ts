const tintColorLight = '#3498DB';
const tintColorDark = '#85C1E9';

export const APP_COLORS = {
  background: '#F8F9FA',
  backgroundSoft: '#F0F2F4',
  surface: '#FFFFFF',
  textPrimary: '#2C3E50',
  textSecondary: '#7F8C8D',
  accent: '#3498DB',
  accentSoft: '#85C1E9',
  border: '#E0E0E0',
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
    title: 'Mirrorless Camera',
    brand: 'Sony',
    category: 'tech',
    description: 'Compact 4K camera for travel and daily shooting.',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581591527829-c5dc9a1e2c5f?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 1099 }],
    rating: 4.6,
    currency: '$',
  },
  {
    id: 1,
    title: 'Modern Bookshelf',
    brand: 'IKEA',
    category: 'furniture',
    description: 'Minimal oak shelf with five spacious tiers.',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b3590ff9dc3a?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 249 }],
    rating: 4.3,
    currency: '$',
  },
  {
    id: 2,
    title: 'Wireless Headphones',
    brand: 'Bose',
    category: 'tech',

    description: 'Over-ear noise cancelling headphones.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546435520-84dbc9b26c58?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394840529-43ea7216f5a1?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [
      { size: 'Standard', price: 199 },
      { size: 'Large', price: 299 },
    ],
    rating: 4.5,
    currency: '$',
  },
  {
    id: 3,
    title: 'Smart Watch',
    brand: 'Garmin',
    category: 'tech',

    description: 'Fitness and sleep tracking with AMOLED display.',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544117761-7e66b6bfc5c7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [
      { size: 'Standard', price: 249 },
      { size: 'Small', price: 220 },
      { size: 'Medium', price: 260 },
      { size: 'Large', price: 290 },
    ],
    rating: 4.2,
    currency: '$',
  },
  {
    id: 4,
    title: 'Leather Backpack',
    brand: 'Herschel',
    category: 'clothing',

    description: 'Premium backpack with laptop sleeve.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-155306240ab-9b126f2a5b0b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571782623460-9d73d2b6e639?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 159 }],
    rating: 4.4,
    currency: '$',
  },
  {
    id: 5,
    title: 'Desk Lamp',
    brand: 'BenQ',
    category: 'tech',

    description: 'Dimmable LED lamp with warm light mode.',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc11390d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534447670778-4a0ad3c1c2e2?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 69 }],
    rating: 4.1,
    currency: '$',
  },
  {
    id: 6,
    title: 'Running Shoes',
    brand: 'Nike',
    category: 'shoes',

    description: 'Lightweight daily trainers with soft cushioning.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528701804431-22f1ffa8e0b3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579338908822-3e8e2a9a9a2f?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 119 }],
    rating: 4.7,
    currency: '$',
  },
  {
    id: 7,
    title: 'Ceramic Mug Set',
    brand: 'Mud & Co',
    category: 'furniture',

    description: 'Set of 4 handmade matte ceramic mugs.',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517848568508-3cdddde1c932?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567459344292-2b44d1d1d7c2?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 39 }],
    rating: 4.0,
    currency: '$',
  },
  {
    id: 8,
    title: 'Bluetooth Speaker',
    brand: 'JBL',
    category: 'tech',

    description: 'Portable speaker with deep bass and 12h battery.',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544093324-4fc58e5bfe07?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572235252267-6949f3f27c91?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 99 }],
    rating: 4.4,
    currency: '$',
  },
  {
    id: 9,
    title: 'Indoor Plant Pot',
    brand: 'Stone & Co',
    category: 'furniture',

    description: 'Concrete planter for modern home decor.',
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1463320753956-715e5ed8c3a7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=1000&auto=format&fit=crop',
    ],
    prices: [{ size: 'Standard', price: 29 }],
    rating: 4.2,
    currency: '$',
  },
];

export const mockCategories = ['clothing', 'tech', 'furniturs', 'Plants'];
