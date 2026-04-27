import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View >
        <Text>Hello There</Text>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
