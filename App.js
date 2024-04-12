import { NavigationContainer } from '@react-navigation/native'
import AuthenticatedNavigator from './navigation/AuthenticatedNavigator'
import { AuthProvider, useAuthContext } from './context/auth-context'
import PublicNavigator from './navigation/PublicNavigator'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Navigation = () => {

  const { isAuthenticated, authenticateUser } = useAuthContext()
  const [isAuthenticatingUser, setIsAuthenticatingUser] = useState(true)

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token")
      if (storedToken) {
        authenticateUser(storedToken)
      }
      setIsAuthenticatingUser(false)
    }
    fetchToken()
  }, [])

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


export default App