import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../../data/medicalConditions.js'
import DropDownPicker from "react-native-dropdown-picker"
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from "@react-native-picker/picker"
const SearchBar = ({ selectedConditions, setSelectedConditions }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])

  const submitCondition = (condition) => {
    console.log(condition)
    setSelectedConditions(prev => [...prev, condition])
    setSearchQuery(prev => "")
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

      {searchQuery.length > 0 &&
      <View style={styles.listContainer}>
        <Picker
          style={styles.list}
          onValueChange={(value) => submitCondition(value)}
        >
          {queryMatches.map((queryMatch, index) =>  <Picker.Item key={index} label={queryMatch} value={queryMatch} />)}
        </Picker>
      </View>

      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  searchBox: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,

  },
  listContainer: {

  },
  list: {


  },
  listItemCondition: {

  }
})

export default SearchBar