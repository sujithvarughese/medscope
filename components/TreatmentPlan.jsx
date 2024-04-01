import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import TreatmentItem from './TreatmentItem'

const TreatmentPlan = ({ treatment }) => {
  return (
    <View style={styles.container}>

      <FlatList
        style={styles.list}
        data={treatment}
        keyExtractor={item => item.name}
        renderItem={({item}) => <TreatmentItem name={item.name} dose={item.dose} description={item.description} precautions={item.precautions} risks={item.risks}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {

  },
  treatment: {

  }
})

export default TreatmentPlan