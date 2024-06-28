import {  StyleSheet, Text, View } from 'react-native'

import ListSearch from '../../components/ListSearch'

import connect from '../../utils/connect'
import { useMedContext } from '../../context/med-context'
import { useEffect, useState } from 'react'
import LoadingOverlay from '../../components/ui/LoadingOverlay'

const DrugInteractionScreen = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [drugInteractions, setDrugInteractions] = useState()

  const fetchDrugInteractions = async (drugs) => {
    try {
      setIsLoading(true)
      const response = await connect.post("interactions", { drugs: drugs })
      return response.data
    } catch (error) {
      throw new Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (drugs) => {
    const { drugInteractionsRes } = await fetchDrugInteractions(drugs)
    setDrugInteractions(drugInteractionsRes)
    console.log("submitted")
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

  return (

      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.search}>
            <ListSearch
              onChange={fetchAutocompleteResults}
              buttonText="submit"
              placeholder="Search drug e.g.acetomenophen"
              onSubmit={handleSubmit}
            />
          </View>


          <View style={styles.results}>
            { drugInteractions && <Text>{drugInteractions}</Text>}
          </View>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({

  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 86,
    backgroundColor: "#FFFFFF",
    padding: 12,
  },
  search: {

  },
  results: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 240,
    padding: 16,
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,



  }
})
export default DrugInteractionScreen