import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../data/medicalConditions.js'

const SearchBar = ({ selectedConditions, setSelectedConditions }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])

  const submitCondition = (condition) => {
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
        placeholder="search symptoms..."
        autoFocus={true}
        dense={true}
        clearButtonMode='always'
        autoCapitalize="none"
      >
      </TextInput>

      {
        (searchQuery.length > 2 && queryMatches.length) === 0
          ?
          <Text>No results found</Text>
          :
          <FlatList
            style={styles.list}
            data={queryMatches}
            keyExtractor={({item}) => item}
            renderItem={({item}) =>
              <TouchableOpacity style={styles.listItemCondition} onPress={()=>submitCondition(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>}
          />
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
  list: {

  },
  listItemCondition: {

  }
})

export default SearchBar