import { MotiView } from 'moti';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { APP_COLORS, homeTitle } from '../constants';
import { Search, X } from 'lucide-react-native';

const Home = () => {
  const animatedTitle = [...homeTitle.split(' '), '"'].filter(
    word => word !== '"',
  );

  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
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
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 50,
          delay: 300,
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
            <X color={APP_COLORS.accent} size={16} style={styles.searchIcon} />
          </TouchableOpacity>
        )}
      </MotiView>
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
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 12,
    paddingHorizontal: 12,
    height: 52,
    borderWidth: 1,
    borderColor: APP_COLORS.border,
  },
  searchIcon: {
    marginHorizontal: 8,
    alignSelf: 'center',
  },
});
