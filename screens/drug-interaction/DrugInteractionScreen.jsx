import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useEffect, useState } from 'react'
import ListSearch from '../../components/ListSearch'
import { commonDrugList } from '../../data/commonDrugList'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from '../../components/ui/Button'

const DrugInteractionScreen = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState(commonDrugList)
  const [selectedItems, setSelectedItems] = useState([])

  const handleSubmit = () => {

  }

  const handleSelectToggle = (item) => {
    if (selectedItems. length >= 5 && selectedItems.includes(item)) {
      console.log("5 meds max")
    }
    if (selectedItems.includes(item)) {
      const updatedSelectedItems = [...selectedItems, item]
      setSelectedItems(updatedSelectedItems)
    } else {
      const updatedSelectedItems = selectedItems.filter(selected => selected !== item)
      setSelectedItems(updatedSelectedItems)
    }
  }

  useEffect(() => {
    if (searchQuery.length === 0) {
      setQueryMatches(commonDrugList)
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredMatches = commonDrugList.filter(drug => {
          return drug.toLowerCase().includes(searchQuery.toLowerCase())
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
            { selectedItems.length >= 2 &&
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
              <Pressable onPress={() => handleSelectToggle(item)}>
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
              onPress={() => handleSelectToggle(item)}
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
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  listItemText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
  selectedList: {
    width: 300,
  },
  selectedItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedItemText: {

  }
})
export default DrugInteractionScreen