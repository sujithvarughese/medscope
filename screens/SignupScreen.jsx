import AuthContent from '../components/auth/AuthContent'
import { useState } from 'react'
import connect from '../utils/connect'
import LoadingOverlay from '../components/ui/LoadingOverlay'

const SignupScreen = () => {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const signupHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true)
      const response = await connect.post("auth/signup", { email, password })
      console.log(response.data)
    } catch (error) {
      throw new Error(error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Signing up user..."/>
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler}/>
}

export default SignupScreen