import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { medicalConditionListSorted } from '../../data/medicalConditions'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { colors } from '../../utils/styles'
import { useSymptomContext } from '../../context/symptom-context'
import Button from '../../components/ui/Button'

const SymptomLookupScreen = ({ navigation }) => {

  const { selectedSymptoms, toggleSymptomSelect, resetConditions, fetchTreatmentPlan } = useSymptomContext()


  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])

  useEffect(() => {
    if (searchQuery.length === 0) {
      setQueryMatches(medicalConditionListSorted)
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredConditions = medicalConditionListSorted.filter(condition => {
          return condition.toLowerCase().includes(searchQuery.toLowerCase())
        })
        // loadOptions enables immediate filtering on input change with callback function passing in filtered results
        setQueryMatches(filteredConditions)
      }
    }, 100)
  }, [searchQuery])

  const handleSubmit = () => {
    fetchTreatmentPlan()
    navigation.navigate("Results")
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

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
            >
            </TextInput>
            <View style={styles.searchIcon}>
              <FontAwesome5 name="search" size={16} color="red" />
            </View>
          </View>
        </View>

        <View style={styles.selectedSymptomList}>
          {selectedSymptoms.map(item =>
            <View style={styles.selectedSymptomItem}>
              <Text style={styles.selectedSymptomText} numberOfLines={1}>{item}</Text>
              <Pressable onPress={() => toggleSymptomSelect(item)}>
                <Ionicons name="remove-circle-sharp" size={20} color="red" />
              </Pressable>

            </View>)}
        </View>

        <FlatList
          style={styles.symptomList}
          data={queryMatches}
          keyExtractor={item => item}
          renderItem={({item}) =>
            <Pressable
              style={styles.symptomItem}
              onPress={() => toggleSymptomSelect(item)}
            >
              <Text style={styles.symptomItemText} numberOfLines={1}>{item}</Text>
              {selectedSymptoms.includes(item) &&
                <Ionicons name="checkmark" size={20} color="red" />}
            </Pressable>
          }
        />

        <View>
          <Button onPress={handleSubmit}><Text>Search</Text></Button>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
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
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 280,
    justifyContent: "center",
    margin: 12,
    height: 42,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 6,
    alignSelf: "flex-end",
  },
  selectedSymptomList: {
    width: 300,
  },
  selectedSymptomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedSymptomText: {

  },
  symptomList: {
    marginVertical: 16,
  },
  symptomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  symptomItemText: {
    fontSize: 20,
    maxWidth: "90%"
  }
})
export default SymptomLookupScreen