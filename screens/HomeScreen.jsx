import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NewsSection from './home/news/NewsSection'
import DrugLookupSection from './home/drugLookup/DrugLookupSection'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <DrugLookupSection style={styles.drugs} />
      <NewsSection style={styles.news} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {

  },
  headerContainer: {
    height: 110
  },
  news: {

  },
  drugs: {

  }
})
export default HomeScreen