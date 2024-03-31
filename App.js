import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewsSection from './components/NewsSection'
import TreatmentPlanForm from './components/TreatmentPlanForm'

export default function App() {



  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NewsSection style={styles.news} />
        <TreatmentPlanForm style={styles.treatmentForm} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  news: {

  },
  treatmentForm: {

  }
});
