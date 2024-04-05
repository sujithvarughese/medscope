import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../../data/medicalConditions.js'
import DropDownPicker from "react-native-dropdown-picker"
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from "@react-native-picker/picker"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
const SymptomSearchBar = ({ selectedConditions, setSelectedConditions, resetConditions, handleSubmit }) => {

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
        <TextInput
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
          onSubmitEditing={submitCondition}
          returnKeyType="search"
          placeholder="Search e.g. heartburn"
          dense={true}
          clearButtonMode='always'
          autoCapitalize="none"
        >
        </TextInput>
        <View style={styles.searchIcon}>
          <FontAwesome5 name="search" size={16} color="red" />
        </View>
      </View>



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
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },
  searchSection: {
    justifyContent: "center",
    alignItems: "flex-end"

  },
  searchBar: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 280,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 4,
  },
  picker: {
    backgroundColor: "white",
  }
})

export default SymptomSearchBar