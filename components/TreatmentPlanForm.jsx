import { Button, FlatList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../data/medicalConditions.js'
import Slider from '@react-native-community/slider'
import SearchBar from './SearchBar'

const TreatmentPlanForm = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [age, setAge] = useState(18)
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
    console.log(selectedConditions)
  }


  return (
    <View style={styles.container}>



      <View style={styles.sexToggle}>
        <View>
          <Text>Sex: </Text>
        </View>

        <View style={styles.switch}>
          <Text>Male</Text>
          <Switch
            value={sex}
            onValueChange={()=>setSex(!sex)}
            ios_backgroundColor="#81b0ff"
            trackColor={{true: '#FFC0CB'}}
          />
          <Text>Female</Text>
        </View>
      </View>

      <View style={styles.ageToggle}>
        <Text>Age: {age}</Text>
        <Slider
          style={styles.slider}
          onValueChange={(val)=>setAge(val)}
          minimumValue={1}
          maximumValue={120}
          step={1}
        />
      </View>

      <SearchBar setSelectedConditions={setSelectedConditions}/>
      <Button title="Search" onPress={handleSubmit}/>
      <Button title="Reset" onPress={resetConditions}/>
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
    flex: 1,
  },
  listItemCondition: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sexToggle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  switch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  ageToggle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  slider: {
    flex: 1,
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
})

export default TreatmentPlanForm