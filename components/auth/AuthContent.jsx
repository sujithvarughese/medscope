import { Alert, StyleSheet, View } from 'react-native';
import AuthForm from './AuthForm'

const AuthContent = ({ isLogin }) => {
  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} credentialsInvalid={false}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default AuthContent