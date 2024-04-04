import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AuthenticatedNavigator from './navigation/AuthenticatedNavigator'
import Header from './components/Header'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import { AuthProvider, useAuthContext } from './context/auth-context'
import PublicNavigator from './navigation/PublicNavigator'
const Stack = createNativeStackNavigator()


const Navigation = () => {

  const { isAuthenticated } = useAuthContext()

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  )

}

const App = () => {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    height: 110,
  },
})
export default App