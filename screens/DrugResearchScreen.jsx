import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { useState } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import connect from '../utils/connect'
import DrugsSearchBar from './drug-research/DrugsSearchBar'
import DrugInformation from './drug-research/DrugInformation'
import { FontAwesome6 } from '@expo/vector-icons';

const DrugResearchScreen = () => {

  const [drugInformation, setDrugInformation] = useState(null)

  const fetchDrugInformation = async (drug) => {
    try {
      const response = await connect.post("drug", { drug })
      const { drugInformationData } = response.data
      setDrugInformation(drugInformationData)
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.searchSection}>
        <Text style={styles.headingText}>Drug Search</Text>
        <DrugsSearchBar style={styles.search} fetchDrugInformation={fetchDrugInformation} />
      </View>

      {drugInformation !== null &&
        <DrugInformation
          style={styles.information}
          name={drugInformation.name}
          use={drugInformation.use}
          precautions={drugInformation.precautions}
          sideEffects={drugInformation.sideEffects}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  searchSection: {
    gap: 8,
    padding: 25,
    backgroundColor: "dodgerblue",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headingText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  search: {

  },
  information: {

  }
})

export default DrugResearchScreen