import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native"
import { colors } from '../../utils/styles'
import Input from '../ui/Input'
import welcomeImage from "../../assets/welcome.jpeg"

const AuthForm = ({ isLogin, credentialsInvalid }) => {

  const navigation = useNavigation()

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const handleSubmit = (action) => {
    console.log(action)
  }
  const handlePw = () => {
    console.log("forgot password")
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={welcomeImage}>

        <View style={styles.backgroundOverlay}>
          <Text style={styles.heading}>{isLogin ? "LOG IN" : "SIGN UP"}</Text>

          <View style={styles.inputGroup}>
            <Input
              label="Email Address"
              onUpdateValue={(value) => setEnteredEmail(value)}
              value={enteredEmail}
              keyboardType="email-address"
              isInvalid={emailIsInvalid}
            />
            {!isLogin && (
              <Input
                label="Confirm Email Address"
                onUpdateValue={(value) => setEnteredConfirmPassword(value)}
                value={enteredConfirmEmail}
                keyboardType="email-address"
                isInvalid={emailsDontMatch}
              />
            )}
            <Input
              label="Password"
              onUpdateValue={(value) => setEnteredPassword(value)}
              secure
              value={enteredPassword}
              isInvalid={passwordIsInvalid}
            />
            {!isLogin && (
              <Input
                label="Confirm Password"
                onUpdateValue={(value) => setEnteredConfirmPassword(value)}
                secure
                value={enteredConfirmPassword}
                isInvalid={passwordsDontMatch}
              />
            )}
          </View>
          <View>
            <Pressable
              style={styles.altButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.altButtonText}>Home</Text>
            </Pressable>
          </View>

          {isLogin &&
            <Pressable
              style={styles.forgotPasswordButton}
              onPress={handlePw}
            >
              <Text style={styles.forgotPasswordText}> <Text>Forgot Password?</Text></Text>
            </Pressable>}


          <Pressable
            style={styles.submitButton}
            onPress={isLogin ? () => handleSubmit("Login") : () => handleSubmit("Signup")}
          >
            <Text style={styles.buttonText}>{isLogin ? "LOG IN" : "SIGN UP"}</Text>
          </Pressable>


          <View style={styles.altGroup}>
            <Text style={styles.altText}>{isLogin ? "Don't have" : "Have"} an account?</Text>
            <Pressable
              style={styles.altButton}
              onPress={isLogin ? () => navigation.navigate("Signup") : () => navigation.navigate("Login")}
            >
              <Text style={styles.altButtonText}>{isLogin ? "SIGN UP" : "LOGIN"}</Text>
            </Pressable>
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
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
  },
  inputGroup: {

  },
  forgotPasswordButton: {

  },
  forgotPasswordText: {
    color: colors.colorGray
  },
  submitButton: {
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
  altGroup: {
    flexDirection: "row",
    gap: 2,
  },
  altText: {
    color: colors.colorGray
  },
  altButton: {

  },
  altButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700"
  }
})

export default AuthForm