import { MotiView } from 'moti';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { APP_COLORS, homeTitle } from '../constants';

const Home = () => {
  const animatedTitle = [...homeTitle.split(' '), '"'].filter(
    word => word !== '"',
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
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

      <View></View>
      <Text>{animatedTitle}</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.background,
  },
  header: {
    fontSize: 30,
    color: APP_COLORS.textPrimary,
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    rowGap: 3,
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});
