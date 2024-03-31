import { Image, ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NewsTile = ({ source, title, url, urlToImage }) => {

  return (
    <View style={styles.container}>

      <Image resizeMode="cover" style={styles.image} source={{ uri: urlToImage }} />

      <View style={styles.text} >
        <Text style={styles.source}>{source}</Text>
        <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(url)}>
          <Text numberOfLines={3} style={styles.title}>{title.substring(0, title.indexOf(" - "))}</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 240,
    marginRight: 12,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
  },
  image: {
    flex: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    flex: 1,
    padding: 6,
    gap: 3,
  },
  source: {

  },
  touchable: {

  },
  title: {
    fontWeight: "700",
  }
})

export default NewsTile