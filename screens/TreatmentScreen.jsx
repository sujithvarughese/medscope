import { View, StyleSheet, Text, ScrollView } from 'react-native'
import TreatmentForm from './symptom-checker/TreatmentForm'
import TreatmentPlan from './symptom-checker/TreatmentPlan'
import { useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../utils/connect'
import AgeSexSelectorScreen from './symptom-checker/AgeSexSelectorScreen'
import SymptomSearchBar from './symptom-checker/SymptomSearchBar'
import Button from '../components/ui/Button'

const TreatmentScreen = () => {

  const [treatment, setTreatment] = useState([])

  const [age, setAge] = useState("18")
  const [sex, setSex] = useState(false)
  const [selectedConditions, setSelectedConditions] = useState([])

  const removeSelectedCondition = (conditionToRemove) => {
    const updatedSelectedConditions = selectedConditions.filter(condition => condition !== conditionToRemove)
    setSelectedConditions(updatedSelectedConditions)
  }
  const resetConditions = () => {
    setSelectedConditions([])
  }
  const handleSubmit = () => {
    console.log(selectedConditions)
    const selectedSex = sex === true ? "female" : "male"
    fetchTreatmentPlan({ age, sex: selectedSex, medicalConditions: selectedConditions })
  }


  const fetchTreatmentPlan = async ({ age, sex, medicalConditions }) => {
    try {
      const response = await connect.post("conditions", { age, sex, medicalConditions })
      const { treatmentPlan } = response.data
      setTreatment(treatmentPlan)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <View style={styles.container}>

      <AgeSexSelectorScreen age={age} setAge={setAge} sex={sex} setSex={setSex}/>

      <SymptomSearchBar
        resetConditions={resetConditions}
        handleSubmit={handleSubmit}
        selectedConditions={selectedConditions}
        setSelectedConditions={setSelectedConditions}
      />

      <Button onPress={handleSubmit}>
        <Text>Search</Text>
      </Button>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    alignItems: "center",
    gap: 24


  },
})

export default TreatmentScreen