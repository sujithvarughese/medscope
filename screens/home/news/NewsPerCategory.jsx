import { FlatList, StyleSheet, Text, View } from 'react-native'
import NewsTile from './NewsTile'

const NewsPerCategory = ({ category, articles }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest {category} News</Text>
      {articles. length > 0 &&
      <FlatList
        style={styles.list}
        horizontal={true}
        initialNumToRender={4}
        keyExtractor={item => item.title}
        data={articles}
        renderItem={({item}) => <NewsTile source={item.source.name} title={item.title} url={item.url} urlToImage={item.urlToImage} date={item.publishedAt}/>}
      />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    paddingTop: 12,
    paddingHorizontal: 6,
  },
  text: {
    fontWeight: "700",
    textTransform: "capitalize"
  },
  list: {
    height: 235,
  }
})

export default NewsPerCategory