import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './navigation/TabNavigation'

const App = () => {

  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaProvider>

  );
}

export default App