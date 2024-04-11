import { useState } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import DrugUses from '../screens/drug-research/drug-details/DrugUses'
import DrugPrecautions from '../screens/drug-research/drug-details/DrugPrecautions'
import DrugDirections from '../screens/drug-research/drug-details/DrugDirections'
import { colors } from '../utils/styles'


const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <DrugUses name={route.name} description={route.description} uses={route.uses} />
    case "second":
      return <DrugDirections directions={route.directions} />
    case "third":
      return <DrugPrecautions precautions={route.precautions} sideEffects={route.sideEffects} />
    default:
      return <DrugUses name={route.name} description={route.description} uses={route.uses} />
  }
}

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      labelStyle={{ fontWeight: "700", fontSize: 12 }}
      activeColor={colors.color}
      inactiveColor={'black'}
      tabStyle={{ backgroundColor: "white" }}
    />
    )

}
const DrugDetailsTabNavigator = ({route}) => {
  const { name, description, uses, directions, precautions, sideEffects } = route.params

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Overview', name: name, description: description, uses: uses },
    { key: 'second', title: 'Directions', directions: directions },
    { key: 'third', title: 'Precautions', precautions: precautions, sideEffects: sideEffects },

  ]);

  return (
      <TabView
        style={styles.page}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
  );
}
const styles = StyleSheet.create({
  page: {
    padding: 12,

  },

})

export default DrugDetailsTabNavigator