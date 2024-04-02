import { View, Text, StyleSheet } from 'react-native'
import NewsSection from './NewsSection'

const HomeScreen = () => {
  return (
    <View>
      <NewsSection style={styles.news} />
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

})
export default HomeScreen