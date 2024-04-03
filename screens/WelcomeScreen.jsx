
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import logo from "../assets/logo_nobg.png"
import welcomeImage from "../assets/welcome.jpeg"
import { colors } from '../utils/styles'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={welcomeImage}>

        <View style={styles.backgroundOverlay}>
          <View style={styles.textGroup}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.logo}>
              <Text style={styles.med}>Med</Text>
              <Text style={styles.scope}>Scope</Text>
              <Image style={styles.image} source={logo} alt="logo"/>
            </View>
            <Text style={styles.caption}>Keeping your health in scope.</Text>
          </View>

          <View style={styles.buttonGroup}>
            <Pressable style={styles.loginButton}><Text style={styles.buttonText}>LOGIN NOW</Text></Pressable>
            <Pressable style={styles.signupButton}><Text style={styles.buttonText}>SIGN UP</Text></Pressable>
          </View>
        </View>

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "space-around",
  },
  textGroup: {
    alignItems: "center",
  },
  welcome: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 12,
  },
  med: {
    color: colors.colorGray,
    fontSize: 20,
    fontWeight: "600"
  },
  scope: {
    color: colors.color,
    fontSize: 20,
    fontWeight: "600"
  },
  image: {
    width: 30,
    height: 30
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 16,


  },
  buttonGroup: {
    alignItems: "center",
    gap: 20,
  },
  loginButton: {
    alignItems: "center",
    width: 300,
    borderRadius: 50,
    paddingVertical: 16,
    backgroundColor: colors.color,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  signupButton: {
    alignItems: "center",
    width: 300,
    borderRadius: 50,
    borderColor: "#FFFFFF",
    borderWidth: 1.2,
    paddingVertical: 16,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
  }
})

export default WelcomeScreen