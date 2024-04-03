import { View, StyleSheet, Text, ScrollView } from 'react-native'
import TreatmentForm from './treatment/TreatmentForm'
import TreatmentPlan from './treatment/TreatmentPlan'
import { useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../utils/connect'

const TreatmentScreen = () => {

  const [treatment, setTreatment] = useState([])

  const fetchTreatmentPlan = async ({ age, sex, medicalConditions }) => {
    console.log(medicalConditions)
    try {
      const response = await connect.post("conditions", { age, sex, medicalConditions })
      const { treatmentPlan } = response.data
      setTreatment(treatmentPlan)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <TreatmentForm style={styles.treatmentForm} fetchTreatmentPlan={fetchTreatmentPlan}/>
        {treatment.length > 0 &&
        <TreatmentPlan style={styles.treatmentPlan} treatment={treatment}/>}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  treatmentForm: {

  },
  treatmentPlan: {

  }
})

export default TreatmentScreen