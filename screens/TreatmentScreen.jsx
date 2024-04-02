import { View, StyleSheet, Text } from 'react-native'
import TreatmentForm from './treatment/TreatmentForm'
import TreatmentPlan from './treatment/TreatmentPlan'
import { useState } from 'react'
import axios from 'axios'

const TreatmentScreen = () => {

  const [treatment, setTreatment] = useState([])

  const fetchTreatmentPlan = async ({ age, sex, medicalConditions }) => {
    try {
      const response = await axios.post("http://localhost:8800/api/v1/conditions", { age, sex, medicalConditions })
      const { treatmentPlan } = response.data
      setTreatment(treatmentPlan)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <View style={styles.container}>
      <TreatmentForm style={styles.treatmentForm} fetchTreatmentPlan={fetchTreatmentPlan}/>
      <TreatmentPlan style={styles.treatmentPlan} treatment={treatment}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  treatmentForm: {
    height: 100
  },
  treatmentPlan: {
    flex: 4
  }
})

export default TreatmentScreen