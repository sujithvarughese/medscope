import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TreatmentScreen from '../screens/TreatmentScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useAuthContext } from '../context/auth-context'
import IconButton from '../components/ui/IconButton'
import DrugResearchScreen from '../screens/DrugResearchScreen'
import SymptomCheckerStack from './stacks/SymptomCheckerStack'
import SymptomResultsScreen from '../screens/symptom-checker/SymptomResultsScreen'
import AgeSexSelectorScreen from '../screens/symptom-checker/AgeSexSelectorScreen'


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
          tabBarLabel: "Drugs",
          tabBarIcon: () => <FontAwesome6 name="prescription-bottle-medical" size={24} color="black" />,
          headerTitle: "Drug Research"
        }}
      />
      <Tab.Screen
        name="treatment"
        component={AgeSexSelectorScreen}
        options={{
          tabBarLabel: "Symptom Checker",
          tabBarIcon: () => <Fontisto name="doctor" size={24} color="black" />,
          headerTitle: "Symptom Checker"
        }}
      />
    </Tab.Navigator>
  )
}
export default AuthenticatedNavigator