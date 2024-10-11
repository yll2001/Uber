import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { create } from 'twrnc';
import MapScreen from './screens/MapScreen';
import KeyboardAvoidingComponent from './screens/TestScreen';


// 1)Setup Redux 

export default function App() {

  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Provider store={store}>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}>
              <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                  headerShown: false,
                }} />
                <Stack.Screen name='MapScreen' component={MapScreen} options={{
                  headerShown: false,
                }} />
                <Stack.Screen name='TestScreen' component={KeyboardAvoidingComponent} options={{
                  headerShown: false,
                }} />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
