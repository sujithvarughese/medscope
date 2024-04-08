import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DrugUsesScreen from '../screens/drug-details/DrugUsesScreen'
import DrugPrecautionsScreen from '../screens/drug-details/DrugPrecautionsScreen'
import DrugSideEffectsScreen from '../screens/drug-details/DrugSideEffectsScreen'

const Tab = createMaterialTopTabNavigator()

const DrugDetailsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Uses" component={DrugUsesScreen} />
            <Tab.Screen name="Precautions" component={DrugPrecautionsScreen} />
            <Tab.Screen name="Side Effects" component={DrugSideEffectsScreen} />
        </Tab.Navigator>
    )
}

export default DrugDetailsNavigator