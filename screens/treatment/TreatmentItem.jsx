import { StyleSheet, Text, View } from 'react-native'
const TreatmentItem = ({ name, dose, description, precautions, sideEffects }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.dose}>
        <Text style={styles.title}>{dose ? "Dose" : "Description"}</Text>
        <Text>{dose || description}</Text>
      </View>

      <View style={styles.precautions}>
        <Text style={styles.title}>Precautions</Text>
        <View>
          {precautions?.map((precaution, index) =>
          <Text key={index}>{'\u00B7'}<Text>{precaution.charAt(0).toUpperCase()}{precaution.substring(1)}.</Text></Text>)}
        </View>

      </View>

      <View style={styles.sideEffects}>
        <Text style={styles.title}>Side Effects</Text>
        <View>
          {sideEffects?.map((sideEffect, index) =>
          <Text key={index} style={styles.text}>{'\u00B7'} {sideEffect}</Text>)}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    marginBottom: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize"
  },
  title: {
    fontWeight: "700",
  },
  dose: {

  },
  precautions: {
  },
  sideEffects: {

  },
  text: {
    textTransform: "capitalize",
  },
})

export default TreatmentItem