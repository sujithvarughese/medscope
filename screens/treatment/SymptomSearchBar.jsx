import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import CheckBox from 'expo-checkbox';
import { useEffect, useState } from 'react'
import { medicalConditionsList } from '../../data/medicalConditions.js'
import DropDownPicker from "react-native-dropdown-picker"
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from "@react-native-picker/picker"
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../../components/ui/Button'
import { Ionicons } from '@expo/vector-icons';
const SymptomSearchBar = ({ selectedConditions, setSelectedConditions, resetConditions, handleSubmit }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])
  const [isChecked, setChecked] = useState(false);
  const [selected, setSelected] = useState([])


  const toggleItemSelect = (item) => {
    if (selectedConditions.length >= 5 && !selectedConditions.includes(item)) {
      console.log("5 conditions max")
      return
    }
    if (!selectedConditions.includes(item)) {
      setSelectedConditions(prev => [...prev, item])
    } else {
      const updatedSelectedConditions = selectedConditions.filter(condition => condition !== item)
      setSelectedConditions(updatedSelectedConditions)
    }
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
          returnKeyType="search"
          placeholder="Search e.g. heartburn"
          dense={true}
          clearButtonMode='always'
          autoCapitalize="none"
        >
        </TextInput>
        {/*<View style={styles.searchIcon}>
          <FontAwesome5 name="search" size={16} color="red" />
        </View>*/}

        <Button>
          <Text>Search</Text>
        </Button>
      </View>

      {queryMatches.length > 0 &&
        <FlatList
          style={styles.symptomList}
          data={queryMatches}
          keyExtractor={item => item}
          renderItem={({item}) =>

              <Pressable
                style={styles.symptomItem}
                onPress={() => toggleItemSelect(item)}
              >
                <Text style={styles.symptomItemText} numberOfLines={1}>{item}</Text>
                {selectedConditions.includes(item) &&
                <Ionicons name="checkmark" size={20} color="red" />}
              </Pressable>
          }
        />
      }

      <View style={styles.selectedSymptomList}>
        {selectedConditions.map(item =>
        <View style={styles.selectedSymptomItem}>
          <Text style={styles.selectedSymptomText} numberOfLines={1}>{item}</Text>
          <Pressable onPress={() => toggleItemSelect(item)}>
            <Ionicons name="remove-circle-sharp" size={20} color="red" />
          </Pressable>

        </View>)}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 24,
    width: 300,
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 180,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 4,
  },
  symptomList: {
    backgroundColor: "white",
    maxHeight: 160,
    width: "100%",
  },
  symptomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  symptomItemText: {
    fontSize: 20,
    maxWidth: "90%"
  },
  selectedSymptomList: {
    width: "95%",
  },
  selectedSymptomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedSymptomText: {

  },
  checked: {

  }
})

export default SymptomSearchBar