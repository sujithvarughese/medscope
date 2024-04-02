import {View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/HomeScreen'
import TreatmentScreen from '../components/TreatmentScreen'

const Tab = createBottomTabNavigator()
const TabNavigation = () => {


  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="treatment"
        component={TreatmentScreen}
        options={{
          tabBarLabel: "Treatment"
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation