import { Alert, StyleSheet, View } from 'react-native';
import { useState } from "react"
import AuthForm from './AuthForm'

const AuthContent = ({ isLogin, onAuthenticate }) => {

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const submitHandler = (credentials) => {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || !passwordsAreEqual))) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password })
  }

  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} credentialsInvalid={false} onSubmit={submitHandler}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default AuthContent