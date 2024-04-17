import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NewsTile = ({ source, title, url, urlToImage, date }) => {

  const monthString = ["January", "February","March","April","May","June","July","August","September","October","November", "December"]
  const month = Number(date.substring(5, 7))
  const day = date.substring(8, 10)
  const year = date.substring(0,4)

  return (
    <View style={styles.container}>

      <Image resizeMode="cover" style={styles.image} source={{ uri: urlToImage }} />

      <View style={styles.text} >
        <Text style={styles.source}>{source}</Text>
        <TouchableOpacity style={styles.touchable} onPress={() => Linking.openURL(url)}>
          <Text numberOfLines={3} style={styles.title}>{title.substring(0, title.indexOf(" - "))}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{monthString[month - 1]} {day}, {year}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    height: 230,
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
    flex: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    flex: 1,
    padding: 6,
    gap: 3,
  },
  source: {
    fontSize: 13,
  },
  touchable: {

  },
  title: {
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    fontStyle: "italic",
    color: "gray"
  }
})

export default NewsTile