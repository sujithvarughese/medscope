import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrugLookupScreen from "../../screens/drug-research/DrugLookupScreen"
import DrugResultsScreen from '../../screens/drug-research/DrugResultsScreen'
import DrugDetailsNavigator from '../DrugDetailsNavigator'


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
          component={DrugResultsScreen}
          options={{
            headerTitle: ""
          }}
        />
        <Stack.Screen
            name="Drug Details"
            component={DrugDetailsNavigator}
        />
      </Stack.Navigator>


  )
}

export default DrugResearchStack