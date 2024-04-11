import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrugLookupScreen from "../screens/drug-research/DrugLookupScreen"
import DrugDetailsTabNavigator from './DrugDetailsTabNavigator'



const Stack = createNativeStackNavigator()


const DrugResearchStack = () => {

  return (

      <Stack.Navigator initialRouteName="Lookup">
        <Stack.Screen
          name="Lookup"
          component={DrugLookupScreen}
          options={{
            headerTitle: "Drug Lookup"
          }}
        />
        <Stack.Screen
          name="DrugDetails"
          component={DrugDetailsTabNavigator}
          options={{
            headerTitle: ""
          }}
        />

      </Stack.Navigator>


  )
}

export default DrugResearchStack