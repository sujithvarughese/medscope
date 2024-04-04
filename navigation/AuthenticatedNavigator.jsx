import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TreatmentScreen from '../screens/TreatmentScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth-context'
import IconButton from '../components/ui/IconButton'
import DrugResearchScreen from '../screens/DrugResearchScreen'

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
        name="drugs"
        component={DrugResearchScreen}
        options={{
          tabBarLabel: "Drug Research",
          tabBarIcon: () => <FontAwesome6 name="prescription-bottle-medical" size={24} color="black" />,
          headerTitle: ""
        }}
      />
      <Tab.Screen
        name="treatment"
        component={TreatmentScreen}
        options={{
          tabBarLabel: "Treatment",
          tabBarIcon: () => <Fontisto name="doctor" size={24} color="black" />,
          headerTitle: ""
        }}
      />
    </Tab.Navigator>
  )
}
export default AuthenticatedNavigator