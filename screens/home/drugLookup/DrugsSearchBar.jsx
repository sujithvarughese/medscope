import { StyleSheet, TextInput, View } from 'react-native'
import { useEffect, useState } from 'react'
import { drugListData } from '../../../data/drugList.js'
import { Picker } from "@react-native-picker/picker"
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

      <TextInput
        style={styles.searchBox}
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

      {searchQuery.length > 0 &&
        <View style={styles.listContainer}>
          <Picker
            style={styles.list}
            onValueChange={(value) => handleSubmit(value)}
          >
            {queryMatches.map((queryMatch, index) =>  <Picker.Item key={index} label={queryMatch} value={queryMatch} />)}
          </Picker>
        </View>

      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  searchBox: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,

  },
  listContainer: {

  },
  list: {


  },
  listItemCondition: {

  }
})

export default DrugsSearchBar