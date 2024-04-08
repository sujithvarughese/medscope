import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NewsSection from './news/NewsSection'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import HealthTips from './healthTips/HealthTips'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HealthTips />
      <NewsSection style={styles.news} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 8
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