import { View, StyleSheet, Text, ScrollView, TextInput, FlatList, Pressable } from 'react-native'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../../utils/connect'
import DrugResultsScreen from './DrugResultsScreen'
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../../utils/styles'
import Button from '../../components/ui/Button'
import { drugListData } from '../../data/drugList'

const DrugLookupScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])
  const [drugInformation, setDrugInformation] = useState(null)

  const fetchDrugInformation = async (drug) => {
    try {
      const response = await connect.post("drug", { drug })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleSubmit = async (selectedDrug) => {
    setSearchQuery("")
    const { drugInformationData } = await fetchDrugInformation(selectedDrug)
    navigation.navigate("DrugInfo", {
      name: drugInformationData.name,
      use: drugInformationData.use,
      precautions: drugInformationData.precautions,
      sideEffects: drugInformationData.sideEffects

    })
  }

  useEffect(() => {
    if (searchQuery.length <= 0) {
      setQueryMatches([])
    }
    // delay after user starts typing before searching
    setTimeout(() => {
      // filter workouts based on user-entered query once user has entered 3 letters
      if (searchQuery.length > 2) {
        const filteredDrugs = drugListData.filter(drug => drug.toLowerCase().includes(searchQuery.toLowerCase()))
        // loadOptions enables immediate filtering on input change with callback function passing in filtered results
        setQueryMatches(filteredDrugs)
      }
    }, 100)
  }, [searchQuery])
  return (
    <View style={styles.container}>

      <Text style={styles.searchHeading}>Search brand name or drug ingredient</Text>

      <View style={styles.searchContainer}>


        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={(query) => setSearchQuery(query)}
            onSubmitEditing={(value) => handleSubmit(value)}
            returnKeyType="search"
            placeholder="Search ingredients or drug brand name"
            dense={true}
            clearButtonMode='always'
            autoCapitalize="none"
          >
          </TextInput>
          <View>
            <Text>Search</Text>
          </View>
        </View>


        {searchQuery.length > 0 &&
          <FlatList
            style={styles.drugList}
            data={queryMatches}
            keyExtractor={item => item}
            renderItem={({item}) =>
              <Pressable
                style={styles.drugItem}
                onPress={()=>handleSubmit(item)}
              >
                <Text style={styles.drugItemText}>{item}</Text>
              </Pressable>
            }
          />}

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    alignItems: "center",
    gap: 24
  },
  searchContainer: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 24,
    width: 300,
  },
  searchSection: {
    gap: 8,
    margin: 25,
    padding: 25,
    borderRadius: 8,
  },
  headingText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  searchHeading: {
    fontSize: 16
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
  drugList: {
    backgroundColor: "white",
  },
  drugItem: {

  },
  drugItemText: {
    fontSize: 20,
  },
})

export default DrugLookupScreen