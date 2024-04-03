import { FlatList, StyleSheet, Text, View } from 'react-native'

const DrugInformation = ({ name, use, precautions, sideEffects }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.use}>
        <Text style={styles.title}>Primary Use</Text>
        <Text>{use}</Text>
      </View>


      <View style={styles.precautions}>
        <Text style={styles.title}>Precautions</Text>
        {precautions?.map((precaution, index) => <Text key={index}>{precaution}</Text>)}
      </View>

      <View style={styles.sideEffects}>
        <Text style={styles.title}>Side Effects</Text>
        {sideEffects?.map((sideEffect, index) =>
        <Text key={index} style={styles.text}><Text>{'\u00B7'}</Text>{sideEffect}</Text>)}
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
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  title: {
    fontWeight: "bold",
  },
  use: {

  },
  precautions: {
  },
  sideEffects: {

  },
  listItem: {
    paddingHorizontal: 8,
  },
  text: {
    textTransform: "capitalize",

  },
})

export default DrugInformation