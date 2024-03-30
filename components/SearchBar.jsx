import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsData } from '../data/med-conditions-data'
import Slider from '@react-native-community/slider'

const SearchBar = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [age, setAge] = useState(18)
  const [queryMatches, setQueryMatches] = useState(null)
  const [selectedConditions, setSelectedConditions] = useState([])

  const submitCondition = (condition) => {
    setSelectedConditions(prev => [...prev, condition])
    setSearchQuery(prev => "")
  }

  const resetConditions = () => {
    setSelectedConditions([])
    setSearchQuery("")
  }

  const handleAgeSlider = () => {

  }

  const handleSubmit = () => {
    console.log(selectedConditions)
  }

  useEffect(() => {
    if (searchQuery.length <= 0) {
      setQueryMatches([])
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredConditions = medicalConditionsData.filter(condition => {
          return condition.primary_name.toLowerCase().includes(searchQuery.toLowerCase())
        })
        // loadOptions enables immediate filtering on input change with callback function passing in filtered results
        setQueryMatches(filteredConditions)
      }
    }, 100)
  }, [searchQuery])

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedConditions}
        keyExtractor={({item}) => item}
        renderItem={({item}) =>
        <View>
          <Text>{item}</Text>
        </View>}
      />
      <Text>Age: {age}</Text>
      <Slider
        onValueChange={(val)=>setAge(val)}
        minimumValue={1}
        maximumValue={120}
        step={1}
      />
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
        onSubmitEditing={submitCondition}
        returnKeyType="search"
        placeholder="search symptoms..."
        autoFocus={true}
        dense={true}
        clearButtonMode='always'
        autoCapitalize="none"
      >
      </TextInput>
      <FlatList
        data={queryMatches}
        keyExtractor={({item}) => item?.key_id}
        renderItem={({item}) =>
          <TouchableOpacity onPress={()=>submitCondition(item.primary_name)}><Text>{item?.primary_name}</Text></TouchableOpacity>}
        />
      <Button title="Search" onPress={handleSubmit}/>
      <Button title="Reset" onPress={resetConditions}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    width: 200,
    height: 40
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  }
})

export default SearchBar