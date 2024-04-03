import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from 'react-native'
import Header from './components/Header'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './navigation/TabNavigation'

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
  container: {
    padding: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    height: 130
  },
  news: {

  },
  treatmentForm: {

  },
  treatmentPlan: {

  },
  footer: {

    backgroundColor: "#FAFAFA"
  }
});

export default App