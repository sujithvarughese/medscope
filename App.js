import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './navigation/TabNavigation'
import Header from './components/Header'
import { StyleSheet } from 'react-native'

const App = () => {

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.header}>
          <Header/>
        </SafeAreaView>
        <NavigationContainer>
          <TabNavigation />
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