import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import { ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import NewsSection from './components/NewsSection'
import TreatmentForm from './components/TreatmentForm'
import Header from './components/Header'
import Footer from './components/Footer'
import TreatmentPlan from './components/TreatmentPlan'
import axios from 'axios'
import { useState } from 'react'

export default function App() {

  const [treatment, setTreatment] = useState([])

  const fetchTreatmentPlan = async ({ age, sex, medicalConditions }) => {
    console.log(age, sex, medicalConditions)
    try {
      const response = await axios.post("http://localhost:8800/api/v1/conditions", { age, sex, medicalConditions })
      const { treatmentPlan } = response.data
      setTreatment(treatmentPlan)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <SafeAreaProvider>

        <SafeAreaView style={styles.container}>
          <Header style={styles.header}/>
          <NewsSection style={styles.news} />
          <TreatmentForm style={styles.treatmentForm} fetchTreatmentPlan={fetchTreatmentPlan}/>
          <TreatmentPlan style={styles.treatmentPlan} treatment={treatment}/>
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
  treatmentPlan: {
    flex: 4,
  },
  footer: {

    backgroundColor: "#FAFAFA"
  }
});
