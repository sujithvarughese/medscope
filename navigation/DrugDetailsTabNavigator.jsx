import { useState } from 'react'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import DrugUses from '../screens/drug-research/drug-details/DrugUses'
import DrugPrecautions from '../screens/drug-research/drug-details/DrugPrecautions'
import DrugSideEffects from '../screens/drug-research/drug-details/DrugSideEffects'


const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <DrugUses name={route.name} use={route.use}/>
    case "second":
      return <DrugPrecautions precautions={route.precautions}/>
    case "third":
      return <DrugSideEffects sideEffects={route.sideEffects} />
    default:
      return <DrugUses name={route.name}/>
  }
}
const DrugDetailsTabNavigator = ({route}) => {
  const { name, use, precautions, sideEffects } = route.params

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Uses', name: name, use: use },
    { key: 'second', title: 'Precautions', precautions: precautions },
    { key: 'third', title: 'Side Effects', sideEffects: sideEffects },
  ]);

  return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
  );
}

export default DrugDetailsTabNavigator