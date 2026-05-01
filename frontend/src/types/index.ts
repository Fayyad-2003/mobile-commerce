export type RootStackParamList = {
  MainTabs: undefined;
};

export type TabNavigatorParamList = {
  Home: Element;
  Cart: undefined;
  Profile: undefined;
};

export type ProductCardType = {
  id?: number;
  title: string;
  image?: string;
  brand: string;
  descirption: string;
  rating: number | string;
  prices:
    | {
        size: string;
        price: number;
      }[]
    | undefined;
  currency?: string;
  onPress?: () => void;
};
