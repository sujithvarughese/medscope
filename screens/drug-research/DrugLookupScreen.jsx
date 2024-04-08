import { View, StyleSheet, Text, ScrollView, TextInput, FlatList, Pressable } from 'react-native'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../../utils/connect'
import DrugResultsScreen from './DrugResultsScreen'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../../utils/styles'
import Button from '../../components/ui/Button'
import { drugListData } from '../../data/drugList'

const DrugLookupScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState(drugListData)
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
      <View style={styles.content}>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <TextInput
                value={searchQuery}
                onChangeText={(query) => setSearchQuery(query)}
                onSubmitEditing={(value) => handleSubmit(value)}
                returnKeyType="search"
                placeholder="Search e.g. Tylenol"
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

        <FlatList
          style={styles.drugList}
          data={queryMatches}
          keyExtractor={item => item}
          renderItem={({item}) =>
            <Pressable
              style={styles.drugItem}
              onPress={()=>handleSubmit(item)}
          >
            <Text style={styles.drugItemText} numberOfLines={1}>{item}</Text>
            </Pressable>
          }
        />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  headingText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
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
  drugList: {
    marginVertical: 16,
  },
  drugItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  drugItemText: {
    fontSize: 20,
    maxWidth: "90%"
  },
})

export default DrugLookupScreen