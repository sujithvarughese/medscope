import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NewsTile = ({ title, url, urlToImage }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(url)}>
      <ImageBackground style={styles.image} source={{ uri: urlToImage }} />
      <Text style={styles.text}>{title.substring(0, 50)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 180,
    marginRight: 12,
  },
  image: {
    flex: 1,
    width: 180,
    height: 180,
    borderRadius: 200,
    objectFit: 'contain'
  },
  text: {
    color: "white",
    fontWeight: "900",
    textAlign: "right"
  }
})

export default NewsTile