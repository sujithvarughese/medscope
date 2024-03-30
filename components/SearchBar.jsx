import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { useEffect, useState } from 'react'
import { medicalConditionsData } from '../data/med-conditions-data'

const SearchBar = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState(null)

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
      <TextInput
        style={styles.searchBox}
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
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
        renderItem={({item}) => <Text>{item?.primary_name}</Text>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  }
})

export default SearchBar