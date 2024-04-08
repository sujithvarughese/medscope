import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSymptomContext } from '../../context/symptom-context'
import TreatmentItem from './TreatmentItem'

const SymptomResultsScreen = () => {

  const { treatmentPlan } = useSymptomContext()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treatment Options</Text>
      <View style={styles.treatment}>
        {treatmentPlan.map(item =>
          <TreatmentItem
            key={item.name}
            name={item.name}
            dose={item.dose}
            description={item.description}
            precautions={item.precautions}
            sideEffects={item.sideEffects}
          />)}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  treatment: {

  }
})
export default SymptomResultsScreen