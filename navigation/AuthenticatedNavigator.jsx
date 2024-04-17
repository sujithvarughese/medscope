import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/home/HomeScreen'

import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth-context'
import IconButton from '../components/ui/IconButton'
import DrugInteractionScreen from '../screens/drug-interaction/DrugInteractionScreen'
import SymptomCheckerStack from './SymptomCheckerStack'
import DrugResearchStack from './DrugResearchStack'
import { colors } from '../utils/styles'



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
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.color
          }
        }}
      />
      <Tab.Screen
        name="drugs"
        component={DrugResearchStack}
        options={{
          tabBarLabel: "Drugs",
          tabBarIcon: () => <FontAwesome6 name="prescription-bottle-medical" size={24} color="black" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="treatment"
        component={SymptomCheckerStack}
        options={{
          tabBarLabel: "Symptoms",
          tabBarIcon: () => <Fontisto name="doctor" size={24} color="black" />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="drug-interactions"
        component={DrugInteractionScreen}
        options={{
          tabBarLabel: "Interactions",
          tabBarIcon: () => <FontAwesome5 name="hand-holding-medical" size={24} color="black" />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default AuthenticatedNavigator