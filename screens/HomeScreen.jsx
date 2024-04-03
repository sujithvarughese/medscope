import { View, Text, StyleSheet } from 'react-native'
import NewsSection from './home/news/NewsSection'
import DrugLookup from './home/drugLookup/DrugLookup'

const HomeScreen = () => {
  return (
    <View>
      <NewsSection style={styles.news} />
      <DrugLookup />
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