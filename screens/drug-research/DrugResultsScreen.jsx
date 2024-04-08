import { FlatList, StyleSheet, Text, View } from 'react-native'

const DrugResultsScreen = ({ route }) => {

  const { name, use, precautions, sideEffects } = route.params

  return (
    <View style={styles.container}>

      <Text style={styles.name}>{name}</Text>

      <View style={styles.use}>
        <Text style={styles.title}>Primary Use</Text>
        <Text>{use}</Text>
      </View>

      <View style={styles.precautions}>
        <Text style={styles.title}>Precautions</Text>
        <View>
          {precautions?.map((precaution, index) => <Text key={index}>{precaution}</Text>)}
        </View>
      </View>

      <View style={styles.sideEffects}>
        <Text style={styles.title}>Side Effects</Text>
        <View>
          {sideEffects?.map((sideEffect, index) =>
          <Text key={index} style={styles.text}><Text>{'\u00B7'}</Text>{sideEffect}</Text>)}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize"
  },
  title: {
    fontWeight: "700",
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

export default DrugResultsScreen