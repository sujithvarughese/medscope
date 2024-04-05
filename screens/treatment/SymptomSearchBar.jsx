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

  const submitCondition = (condition) => {
    console.log(condition)
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
                onPress={(item) => submitCondition(item)}
              >
                <Text>{item}</Text>
                {selectedConditions.includes(item) &&

                    <Pressable
                      style={styles.checked}
                      onPress={() => setChecked(!checked)}>
                      <Ionicons name="checkmark" size={24} color="red" />
                    </Pressable>


                }
              </Pressable>

          }
        />
      }

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

  },
  checked: {

  }
})

export default SymptomSearchBar