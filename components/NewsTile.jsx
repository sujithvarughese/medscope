import { Image, StyleSheet, Text, View } from 'react-native'

const NewsTile = ({ author, title, urlToImage }) => {

  console.log(urlToImage)

  return (
    <View>
      <Text>{title} {author}</Text>
      <Image style={styles.newsImage} source={{ uri: urlToImage }} />
    </View>
  )
}

const styles = StyleSheet.create({
  newsImage: {
    width: 180,
    height: 180
  }
})

export default NewsTile