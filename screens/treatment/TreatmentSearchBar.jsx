import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../../data/medicalConditions.js'
import DropDownPicker from "react-native-dropdown-picker"
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from "@react-native-picker/picker"
import { MaterialCommunityIcons } from '@expo/vector-icons'
const TreatmentSearchBar = ({ selectedConditions, setSelectedConditions, resetConditions, handleSubmit }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])

  const submitCondition = (condition) => {
    setSelectedConditions(prev => [...prev, condition])
    setSearchQuery("")
  }

  useEffect(() => {
    if (searchQuery.length <= 0) {
      setQueryMatches([])
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredConditions = medicalConditionsList.filter(condition => {
          return (condition.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedConditions.includes(condition))
        })
        // loadOptions enables immediate filtering on input change with callback function passing in filtered results
        setQueryMatches(filteredConditions)
      }
    }, 100)
  }, [searchQuery])

  return (
    <View style={styles.container}>

      <View style={styles.searchSection}>
        <TouchableOpacity onPress={resetConditions}><MaterialCommunityIcons name="restart" size={32} color="black" /></TouchableOpacity>
        <TextInput
          style={styles.searchBox}
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          onSubmitEditing={submitCondition}
          returnKeyType="search"
          placeholder="Search health conditions"
          dense={true}
          clearButtonMode='always'
          autoCapitalize="none"
        >
        </TextInput>
        <TouchableOpacity onPress={handleSubmit}><MaterialCommunityIcons name="clipboard-text-search-outline" size={32} color="black" /></TouchableOpacity>
      </View>

      <Text>{}</Text>

      {searchQuery.length > 0 &&
      <Picker
        style={styles.picker}
        onValueChange={(value) => submitCondition(value)}
      >
        {queryMatches.map((queryMatch, index) =>  <Picker.Item key={index} label={queryMatch} value={queryMatch} />)}
      </Picker>}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  searchBox: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 280,
    alignSelf: "center"

  },
  picker: {
    backgroundColor: "white",
  }
})

export default TreatmentSearchBar