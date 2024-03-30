import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NewsTile = ({ author, title, url, urlToImage }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(url)}>
      <ImageBackground style={styles.image} source={{ uri: urlToImage }} resizeMode="cover"/>
      <Text style={styles.text}>{title.substring(0, 50)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 180,
    marginHorizontal: 12,
  },
  image: {
    flex: 1,
    width: 180,
    height: 180
  },
  text: {
    color: "white",
    fontWeight: "900",
    textAlign: "right"
  }
})

export default NewsTile