import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AgeSexSelectorScreen from '../screens/symptom-checker/AgeSexSelectorScreen'
import SymptomLookupScreen from '../screens/symptom-checker/SymptomLookupScreen'
import SymptomResultsScreen from '../screens/symptom-checker/SymptomResultsScreen'
import SymptomProvider from '../context/med-context'
import DrugDetailsTabNavigator from './DrugDetailsTabNavigator'
import { colors } from '../utils/styles'

const Stack = createNativeStackNavigator()


const SymptomCheckerStack = () => {

  return (
    <SymptomProvider>
      <Stack.Navigator initialRouteName="Selector">
        <Stack.Screen
          name="Selector"
          component={AgeSexSelectorScreen}
          options={{
            headerTitle: "Select Profile",
            headerStyle: {
              backgroundColor: colors.color
            }
          }}
        />
        <Stack.Screen
          name="Lookup"
          component={SymptomLookupScreen}
          options={{
            headerTitle: "Symptom Select"
          }}
        />
        <Stack.Screen
          name="Results"
          component={SymptomResultsScreen}
          options={{
            headerTitle: ""
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
    </SymptomProvider>

  )
}

export default SymptomCheckerStack