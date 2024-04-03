import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './navigation/TabNavigator'
import Header from './components/Header'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'
const Stack = createNativeStackNavigator()
const App = () => {



  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={TabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    height: 110,
  },
})
export default App