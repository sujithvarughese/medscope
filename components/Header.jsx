import { Image, Text, StyleSheet, View } from 'react-native'
import logo from "../assets/logo.jpeg"
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <View style={styles.text}>
        <Text style={styles.text1}>Med</Text>
        <Text style={styles.text2}>Scope</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    height: 80,
  },
  image: {
    height: 40,
    width: 40,
  },
  text: {
    flexDirection: "row",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "dodgerblue"
  },
  text2: {
    fontSize: 20,
    color: "royalblue"
  }
})

export default Header