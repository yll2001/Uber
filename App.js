import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// 1)Setup Redux 

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <SafeAreaProvider>
          <HomeScreen />
        </SafeAreaProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});
