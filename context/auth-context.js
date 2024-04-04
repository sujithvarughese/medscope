import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticateUser: () => {},
  logoutUser: () => {}
})

const AuthProvider = ({ children }) => {

  const [authToken, setAuthToken] = useState()

  const authenticateUser = (token) => {
    setAuthToken(token)
  }

  const logoutUser = () => {
    setAuthToken(null)
  }

  return <AuthContext.Provider value={
    {
      token: authToken,
      isAuthenticated: !!authToken,
      authenticateUser,
      logoutUser
    }
  }>
    {children}
  </AuthContext.Provider>
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }