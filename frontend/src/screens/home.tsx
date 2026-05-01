import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  APP_COLORS,
  homeTitle,
  mockCategories,
  mockProducts,
} from '../constants';
import { Search, X } from 'lucide-react-native';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
const Home = () => {
  const navigation = useNavigation<HomeScreenProps>();
  const animatedTitle = [...homeTitle.split(' '), '"'].filter(
    word => word !== '"',
  );

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    index: 0,
    category: mockCategories[0],
  });

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 200), // title starts
      setTimeout(() => setStep(2), 900), // search appears (200 + 250*3 words approx)
      setTimeout(() => setStep(3), 1300), // categories appear
      setTimeout(() => setStep(4), 1800), // products appear
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const allCategories = selectedCategory.category === 'all';
  const filteredProductsWithCategory = mockProducts.filter(p =>
    allCategories ? p : p.category === selectedCategory.category,
  );

  const filteredWithSearch = filteredProductsWithCategory.filter(p =>
    p.title.toLowerCase().includes(searchText.toLocaleLowerCase()),
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          {animatedTitle.map((item, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                delay: index * 250,
              }}
            >
              <Text style={styles.header}>{item}</Text>
            </MotiView>
          ))}
        </View>

        <MotiView
          style={styles.inputContainer}
          from={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0.5 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 50,
            delay: 100,
          }}
        >
          <Search
            color={
              searchText.length > 0
                ? APP_COLORS.accentSoft
                : APP_COLORS.textSecondary
            }
            size={18}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Find Your Product"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={APP_COLORS.textSecondary}
          />

          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <X
                color={APP_COLORS.accent}
                size={16}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          )}
        </MotiView>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          data={mockCategories}
          keyExtractor={(item, idx) => `${item}-${idx}`}
          renderItem={({ item, index }) => (
            <MotiView
              key={`${item}-${index}`}
              from={{ opacity: 0, translateY: 8 }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
                translateY: step >= 3 ? 0 : 10,
              }}
              transition={{ delay: index * 20 }}
              style={styles.categoryAnimated}
            >
              <TouchableOpacity
                style={styles.categoryButton}
                onPress={() =>
                  setSelectedCategory({ index: index, category: item })
                }
              >
                <Text
                  style={[
                    styles.categoryText,
                    {
                      color:
                        selectedCategory.index === index
                          ? APP_COLORS.textPrimary
                          : APP_COLORS.textSecondary,
                    },
                  ]}
                >
                  {item}
                </Text>
                {selectedCategory.category === item && (
                  <MotiView
                    style={styles.activeCircle}
                    from={{
                      opacity: 0,
                      translateX: -10,
                    }}
                    animate={{
                      opacity: 1,
                      translateX: 0,
                    }}
                    transition={{
                      type: 'spring',
                      damping: 30,
                      stiffness: 350,
                      // delay: 1,
                    }}
                  />
                )}
              </TouchableOpacity>
            </MotiView>
          )}
        />

        <FlatList
          scrollEnabled={false}
          style={styles.productsContainer}
          contentContainerStyle={{ gap: 15, paddingBottom: 40 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          data={filteredProductsWithCategory}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title}
          numColumns={2}
          ListEmptyComponent={() => (
            <MotiView
              from={{
                opacity: 0,
                translateY: 15,
              }}
              animate={{
                opacity: step >= 4 ? 1 : 0,
                translateY: step >= 4 ? 0 : 15,
              }}
              style={styles.emptyListContainer}
            >
              <Text>No Products Available</Text>
            </MotiView>
          )}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  id: String(item.id),
                })
              }
            >
              <MotiView
                from={{ opacity: 0, translateY: 15 }}
                animate={{
                  opacity: step >= 4 ? 1 : 0,
                  translateY: step >= 4 ? 0 : 15,
                }}
                transition={{
                  type: 'spring',
                  damping: 12,
                  stiffness: 30,
                  delay: index * 100,
                }}
              >
<ProductCard
                   category={item.category}
                   title={item.title}
                   rating={item.rating}
                   brand={item.brand}
                   images={item.images}
                   id={item.id}
                   prices={item.prices}
                   descirption={item.description}
                   onPress={() => {}}
                 />
              </MotiView>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
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
    paddingHorizontal: 0,
  },
  textInput: {
    color: APP_COLORS.textPrimary,
    flex: 1,
    height: '100%',
    // fontFamily: 'sans',
    fontSize: 16,
    paddingVertical: 0,
    paddingTop: 6,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: APP_COLORS.backgroundSoft,
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 12,
    paddingHorizontal: 12,
    height: 52,
    borderWidth: 0.3,
    borderColor: APP_COLORS.border,
    marginBottom: 20,
  },
  searchIcon: {
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryAnimated: {
    marginRight: 12,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: APP_COLORS.backgroundSoft,
    borderRadius: 50,
    // borderWidth: 1,
    borderColor: APP_COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    color: APP_COLORS.accent,
    fontWeight: '600',
    fontSize: 14,
  },
  activeCircle: {
    height: 3,
    width: 40,
    borderRadius: 50,
    backgroundColor: APP_COLORS.textPrimary,
  },
  productsContainer: {
    display: 'flex',
  },
  emptyListContainer: {
    width: Dimensions.get('window').width - 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
});
