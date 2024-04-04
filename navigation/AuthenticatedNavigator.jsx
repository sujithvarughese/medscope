import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TreatmentScreen from '../screens/TreatmentScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth-context'
import IconButton from '../components/ui/IconButton'

const Tab = createBottomTabNavigator()
const AuthenticatedNavigator = () => {

  const { logoutUser } = useAuthContext()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />,
          headerRight: ({ tintColor }) => <IconButton icon="exit" color={tintColor} size={24} onPress={logoutUser}/>,
          headerTitle: ""
        }}
      />
      <Tab.Screen
        name="treatment"
        component={TreatmentScreen}
        options={{
          tabBarLabel: "Treatment",
          tabBarIcon: () => <Fontisto name="doctor" size={24} color="black" />,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}
export default AuthenticatedNavigator