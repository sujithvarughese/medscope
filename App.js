import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './navigation/TabNavigation'

export default function App() {

  return (
      <SafeAreaProvider>

        <SafeAreaView>
          <Header style={styles.header}/>
        </SafeAreaView>

        <NavigationContainer style={styles.container}>
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
    height: 100,
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
