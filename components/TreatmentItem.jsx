import { StyleSheet, Text, View } from 'react-native'
const TreatmentItem = ({ name, dose, description, precautions, risks }) => {
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
          {precautions?.map(precaution =>
            <View>
              <Text>{'\u00B7'}<Text>{precaution.charAt(0).toUpperCase()}{precaution.substring(1)}.</Text></Text>
            </View>)}
        </View>

      </View>

      <View style={styles.risks}>
        <Text style={styles.title}>Risks</Text>
        {risks?.map(risk=> <Text style={styles.text}>{'\u00B7'} {risk}</Text>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,

  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  title: {
    fontWeight: "bold",
  },
  dose: {

  },
  precautions: {
  },
  listItem: {
    paddingHorizontal: 8,
  },
  risks: {

  },
  text: {
    textTransform: "capitalize",

  },
})

export default TreatmentItem