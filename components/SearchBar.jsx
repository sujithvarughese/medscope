import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../data/medicalConditions.js'

const SearchBar = ({ setSelectedConditions }) => {

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
          return condition.toLowerCase().includes(searchQuery.toLowerCase())
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
                <Text>x</Text>
              </TouchableOpacity>}
          />
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  list: {

  }
})

export default SearchBar