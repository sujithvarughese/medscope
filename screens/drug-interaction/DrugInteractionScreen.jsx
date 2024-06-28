import {  StyleSheet, View } from 'react-native'

import ListSearch from '../../components/ListSearch'

import connect from '../../utils/connect'

const DrugInteractionScreen = () => {

  const handleSubmit = () => {
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
        <ListSearch buttonText="submit" placeholder="Search drug e.g.acetomenophen" onChange={fetchAutocompleteResults} onSubmit={handleSubmit} />
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
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 12
  },
})
export default DrugInteractionScreen