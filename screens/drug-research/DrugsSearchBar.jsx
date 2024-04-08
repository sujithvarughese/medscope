import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { drugListData } from '../../data/drugList.js'
import { Picker } from "@react-native-picker/picker"
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../../components/ui/Button'
const DrugsSearchBar = ({ fetchDrugInformation }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [queryMatches, setQueryMatches] = useState([])

  const handleSubmit = (drug) => {
    setSearchQuery("")
    fetchDrugInformation(drug)
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
        <Button>
          <Text>Search</Text>
        </Button>
      </View>


      {searchQuery.length > 0 &&
      <FlatList
        style={styles.drugList}
        data={queryMatches}
        keyExtractor={item => item}
        renderItem={({item}) =>
          <View style={styles.drugItem}>
            <Text style={styles.drugItemText}>{item}</Text>
          </View>
      }
      />}


      {searchQuery.length > 0 &&
      <Picker
        style={styles.picker}
        onValueChange={(value) => handleSubmit(value)}
      >
        {queryMatches.map((queryMatch, index) =>
        <Picker.Item style={styles.pickerItem} key={index} label={queryMatch} value={queryMatch} />)}
      </Picker>}

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
  picker: {

  },
  pickerItem: {

  },
})

export default DrugsSearchBar