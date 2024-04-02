import { View, Text, StyleSheet } from 'react-native'
import NewsSection from './home/news/NewsSection'
import SearchDrugs from './home/drugLookup/SearchDrugs'
import DrugInformation from './home/drugLookup/DrugInformation'

const HomeScreen = () => {
  return (
    <View>
      <NewsSection style={styles.news} />
      <SearchDrugs style={styles.search}/>
      <DrugInformation />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  news: {

  },
  search: {

  }

})
export default HomeScreen