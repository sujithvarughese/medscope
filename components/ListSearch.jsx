import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useEffect, useState } from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from './ui/Button'
import { medicalConditionListSorted } from '../data/medicalConditions'

const ListSearch = ({ list, handleSelect, handleSubmit, selectedList, toggleItemSelect, buttonStyles }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState(list)
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    if (searchQuery.length === 0) {
      setQueryMatches(list)
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredMatches = list.filter(match => {
          return match.toLowerCase().includes(searchQuery.toLowerCase())
        })
        // loadOptions enables immediate filtering on input change with callback function passing in filtered results
        setQueryMatches(filteredMatches)
      }
    }, 100)
  }, [searchQuery])

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>

            <View style={styles.searchIcon}>
              <TextInput
                value={searchQuery}
                onChangeText={(query) => setSearchQuery(query)}
                returnKeyType="search"
                placeholder="Search e.g. heartburn"
                dense={true}
                clearButtonMode='always'
                autoCapitalize="none"
              />
              <View style={styles.searchIcon}>
                <FontAwesome5 name="search" size={16} color="red" />
              </View>
            </View>
            {
              <View>
                <Button onPress={handleSubmit}><Text>Search</Text></Button>
              </View>
            }

          </View>
        </View>

        <View style={styles.selectedList}>
          {selectedItems.map(item =>
            <View style={styles.selectedItem}>
              <Text style={styles.selectedItemText} numberOfLines={1}>{item}</Text>
              <Pressable onPress={() => toggleItemSelect(item)}>
                <Ionicons name="remove-circle-sharp" size={20} color="red" />
              </Pressable>
            </View>)}
        </View>

        <FlatList
          style={styles.list}
          data={queryMatches}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <Pressable
              style={styles.listItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.listItemText} numberOfLines={1}>{item}</Text>
              {selectedItems?.includes(item) &&
                <Ionicons name="checkmark" size={20} color="red" />}
            </Pressable>
          }
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 12
  },
  searchSection: {
    flexDirection: "row",
    gap: 8
  },
  searchBar: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 28,
    paddingRight: 12,
    paddingVertical: 6,
    width: "96%",
    justifyContent: "center",
    margin: 12,
    height: 42,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 6,
    alignSelf: "flex-start",
  },
  list: {
    width: "100%"
  },
  listItem: {

  },
  listItemText: {

  },
  selectedList: {

  },
  selectedItem: {

  },
  selectedItemText: {

  }
})
export default ListSearch