import { Button, FlatList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../data/medicalConditions.js'
import Slider from '@react-native-community/slider'
import SearchBar from './SearchBar'

const TreatmentForm = ({ fetchTreatmentPlan }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [age, setAge] = useState("18")
  const [sex, setSex] = useState(false)
  const [selectedConditions, setSelectedConditions] = useState([])

  const resetConditions = () => {
    setSelectedConditions([])
  }

  const removeSelectedCondition = (conditionToRemove) => {
    const updatedSelectedConditions = selectedConditions.filter(condition => condition !== conditionToRemove)
    setSelectedConditions(updatedSelectedConditions)
  }

  const handleSubmit = () => {
    const selectedSex = sex === true ? "female" : "male"
    fetchTreatmentPlan({ age, sex: selectedSex, medicalConditions: selectedConditions })
  }


  return (
    <View style={styles.container}>

      <View style={styles.ageToggle}>
        <Text>Age: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(val)=>setAge(val)}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <View style={styles.sexToggle}>
        <View>
          <Text>Sex: </Text>
        </View>
        <View style={styles.switch}>
          <Text>{sex ? "Female" : "Male"}</Text>
          <Switch
            value={sex}
            onValueChange={()=>setSex(!sex)}
            ios_backgroundColor="#81b0ff"
            trackColor={{true: '#FFC0CB'}}
          />
        </View>
      </View>

      <SearchBar selectedConditions={selectedConditions} setSelectedConditions={setSelectedConditions}/>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}><Text>Search</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetConditions}><Text>Reset</Text></TouchableOpacity>
      </View>

      <FlatList
        data={selectedConditions}
        keyExtractor={({item}) => item}
        renderItem={({item}) =>
          <View style={styles.listItemCondition}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={()=>removeSelectedCondition(item)}><Text>x</Text></TouchableOpacity>
          </View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  listItemCondition: {

    flexDirection: "row",
    justifyContent: "space-between",
  },
  sexToggle: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  switch: {

    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  ageToggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchBox: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 6,
  },
})

export default TreatmentForm