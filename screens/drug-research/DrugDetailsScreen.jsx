import { StyleSheet, Text, View } from 'react-native'

const DrugDetailsScreen = ({ route }) => {

  const { name, use, precautions, sideEffects } = route.params

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <Text style={styles.name}>{name}</Text>

        <View style={styles.use}>
          <Text style={styles.title}>What is {name}?</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 12,
    flex: 1,
  },
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    gap: 4,
    padding: 6,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
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

export default DrugDetailsScreen