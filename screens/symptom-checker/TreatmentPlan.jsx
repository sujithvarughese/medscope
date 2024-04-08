import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import TreatmentItem from './TreatmentItem'

const TreatmentPlan = ({ treatment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treatment Options</Text>
      <View style={styles.treatment}>
        {treatment.map(item =>
        <TreatmentItem
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

export default TreatmentPlan