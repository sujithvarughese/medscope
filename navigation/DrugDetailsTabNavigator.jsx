import { useState } from 'react'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import DrugDetailsScreen from '../screens/drug-research/DrugDetailsScreen'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: DrugDetailsScreen,
  second: SecondRoute,
});

const DrugDetailsTabNavigator = ({route}) => {
  const layout = useWindowDimensions();
  console.log(route)
  const { name, use, precautions, sideEffects } = route?.params

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
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