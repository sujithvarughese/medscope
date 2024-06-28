import { View, StyleSheet, Text, ScrollView, TextInput, FlatList, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../../utils/connect'
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { commonDrugList } from '../../data/commonDrugList'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import ListSearch from '../../components/ListSearch'

const DrugLookupScreen = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(false)

  const fetchDrugInformation = async (drug) => {
    try {
      setIsLoading(true)
      const response = await connect.post("drug", { drug })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  const handleSubmit = async (selectedDrug) => {
    const { drugInformationData } = await fetchDrugInformation(selectedDrug)
    navigation.navigate("DrugDetails", {
      name: drugInformationData.name,
      description: drugInformationData.description,
      uses: drugInformationData.uses,
      directions: drugInformationData.directions,
      precautions: drugInformationData.precautions,
      sideEffects: drugInformationData.sideEffects
    })
  }
  const fetchAutocompleteResults = async (searchQuery) => {
    try {
      const response = await connect(`drug?query=${searchQuery}`)
      const { results } = response.data
      return results
    } catch (error) {
      throw new Error(error)
    }
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>

      <ListSearch onChange={fetchAutocompleteResults} onClick={handleSubmit} placeholder="Search drug e.g.acetomenophen"/>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  drugList: {
    width: "100%"
  },
  drugItem: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1
  },
  drugItemText: {
    fontSize: 20,
    textTransform: "capitalize",
  },
})

export default DrugLookupScreen