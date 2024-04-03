import { Button, FlatList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../../data/medicalConditions.js'
import Slider from '@react-native-community/slider'
import TreatmentSearchBar from './TreatmentSearchBar'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const TreatmentForm = ({ fetchTreatmentPlan }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [age, setAge] = useState("18")
  const [sex, setSex] = useState(false)
  const [selectedConditions, setSelectedConditions] = useState([])

  const removeSelectedCondition = (conditionToRemove) => {
    const updatedSelectedConditions = selectedConditions.filter(condition => condition !== conditionToRemove)
    setSelectedConditions(updatedSelectedConditions)
  }
  const resetConditions = () => {
    setSelectedConditions([])
  }

  const handleSubmit = () => {
    const selectedSex = sex === true ? "female" : "male"
    fetchTreatmentPlan({ age, sex: selectedSex, medicalConditions: selectedConditions })
  }

  return (
    <View style={styles.container}>
      <View style={styles.ageSexGroup}>
        <View style={styles.ageGroup}>
          <Text>Age: </Text>
          <TextInput
            style={styles.ageInput}
            onChangeText={(val)=>setAge(val)}
            keyboardType="numeric"
            maxLength={2}
          />
        </View>

        <View style={styles.sexToggle}>
          <Text>{sex ? "Female" : "Male"}</Text>
          <Switch
            style={styles.switch}
            value={sex}
            onValueChange={()=>setSex(!sex)}
            ios_backgroundColor="#81b0ff"
            trackColor={{true: '#FFC0CB'}}
          />
        </View>
      </View>

      <View style={styles.searchBar}>
        <TreatmentSearchBar
          resetConditions={resetConditions}
          handleSubmit={handleSubmit}
          selectedConditions={selectedConditions}
          setSelectedConditions={setSelectedConditions}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    padding: 25,
    backgroundColor: "dodgerblue",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ageSexGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  ageGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  ageInput: {
    borderColor: "#ccc",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 50,
  },
  sexToggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  switch: {

  },

})

export default TreatmentForm