import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NewsScreen from './news/NewsScreen'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import HealthTips from './healthTips/HealthTips'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HealthTips />
      <NewsScreen style={styles.news} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  news: {

  },
})
export default HomeScreen