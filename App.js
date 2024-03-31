import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewsSection from './components/NewsSection'
import TreatmentForm from './components/TreatmentForm'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {



  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header style={styles.header}/>
        <NewsSection style={styles.news} />
        <TreatmentForm style={styles.treatmentForm} />
        <Footer style={styles.footer}/>
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
  },
  news: {
    flex: 1,
  },
  treatmentForm: {
    flex: 4,
  },
  footer: {

    backgroundColor: "#FAFAFA"
  }
});
