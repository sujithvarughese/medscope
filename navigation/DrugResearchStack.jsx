import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrugLookupScreen from "../screens/drug-research/DrugLookupScreen"
import DrugDetailsScreen from '../screens/drug-research/DrugDetailsScreen'



const Stack = createNativeStackNavigator()


const DrugResearchStack = () => {

  return (

      <Stack.Navigator initialRouteName="Lookup">
        <Stack.Screen
          name="Lookup"
          component={DrugLookupScreen}
          options={{
            headerTitle: "Search"
          }}
        />
        <Stack.Screen
          name="DrugInfo"
          component={DrugDetailsScreen}
          options={{
            headerTitle: ""
          }}
        />

      </Stack.Navigator>


  )
}

export default DrugResearchStack