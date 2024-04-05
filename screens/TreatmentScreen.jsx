import { View, StyleSheet, Text, ScrollView } from 'react-native'
import TreatmentForm from './treatment/TreatmentForm'
import TreatmentPlan from './treatment/TreatmentPlan'
import { useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../utils/connect'
import AgeSexSelector from './treatment/AgeSexSelector'
import SymptomSearchBar from './treatment/SymptomSearchBar'
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
    const selectedSex = sex === true ? "female" : "male"
    fetchTreatmentPlan({ age, sex: selectedSex, medicalConditions: selectedConditions })
  }


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
    <View style={styles.container}>

      <SymptomSearchBar
        resetConditions={resetConditions}
        handleSubmit={handleSubmit}
        selectedConditions={selectedConditions}
        setSelectedConditions={setSelectedConditions}
      />

      <AgeSexSelector age={age} setAge={setAge} sex={sex} setSex={setSex}/>

      <Button>
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