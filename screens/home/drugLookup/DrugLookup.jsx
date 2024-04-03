import { StyleSheet, Text, View } from 'react-native'
import SearchDrugs from './SearchDrugs'
import DrugInformation from './DrugInformation'
import connect from '../../../utils/connect'
import { useState } from 'react'

const DrugLookup = () => {

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
      <SearchDrugs style={styles.search} fetchDrugInformation={fetchDrugInformation} />
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
  search: {

  },
  information: {

  }
})

export default DrugLookup