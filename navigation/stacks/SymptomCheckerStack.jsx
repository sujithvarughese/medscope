import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AgeSexSelectorScreen from '../../screens/symptom-checker/AgeSexSelectorScreen'
import SymptomLookupScreen from '../../screens/symptom-checker/SymptomLookupScreen'
import SymptomResultsScreen from '../../screens/symptom-checker/SymptomResultsScreen'
import SymptomProvider from '../../context/symptom-context'

const Stack = createNativeStackNavigator()


const SymptomCheckerStack = () => {

  return (
    <SymptomProvider>
      <Stack.Navigator initialRouteName="Selector">
        <Stack.Screen
          name="Selector"
          component={AgeSexSelectorScreen}
          options={{
            headerTitle: "Profile"
          }}
        />
        <Stack.Screen
          name="Lookup"
          component={SymptomLookupScreen}
          options={{
            headerTitle: "Symptoms"
          }}
        />
        <Stack.Screen
          name="Results"
          component={SymptomResultsScreen}
          options={{
            headerTitle: ""
          }}
        />
      </Stack.Navigator>
    </SymptomProvider>

  )
}

export default SymptomCheckerStack