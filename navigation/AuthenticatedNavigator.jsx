import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TreatmentScreen from '../screens/TreatmentScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const AuthenticatedNavigator = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="treatment"
        component={TreatmentScreen}
        options={{
          tabBarLabel: "Treatment",
          tabBarIcon: () => <Fontisto name="doctor" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}
export default AuthenticatedNavigator