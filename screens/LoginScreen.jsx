import { useState } from "react"
import AuthContent from '../components/auth/AuthContent'
import connect from '../utils/connect'
import LoadingOverlay from '../components/ui/LoadingOverlay'

const LoginScreen = () => {

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const loginHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true)
      const response = await connect.post("auth/login", { email, password })
    } catch (error) {
      throw new Error(error)
    } finally {
      setIsAuthenticating(false)
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in user..." />
  }

  return <AuthContent isLogin={true} onAuthenticate={loginHandler}/>
}

export default LoginScreen