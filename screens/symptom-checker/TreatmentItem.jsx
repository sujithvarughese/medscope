import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useMedContext } from '../../context/med-context'
import connect from '../../utils/connect'
import { useState } from 'react'
import LoadingOverlay from '../../components/ui/LoadingOverlay'
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/ui/Button'
const TreatmentItem = ({ name, directions, setIsLoading }) => {

  const navigation = useNavigation()

  const fetchDrugInformation = async (drug) => {
    try {
      setIsLoading(true)
      const response = await connect.post("drug", { drug })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  const handleSubmit = async () => {
    const { drugInformationData } = await fetchDrugInformation(name)
    console.log(drugInformationData)
    navigation.navigate("DrugDetails", {
      name: drugInformationData.name,
      description: drugInformationData.description,
      uses: drugInformationData.uses,
      directions: drugInformationData.directions,
      precautions: drugInformationData.precautions,
      sideEffects: drugInformationData.sideEffects
    })
  }


  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.content}>
          <Text style={styles.heading}>Directions</Text>
          <Text style={styles.text}>{directions}</Text>
        </View>
      </View>

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Ionicons name="chevron-forward-sharp" size={24} color="red" />
      </Pressable>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    backgroundColor: "#FEFEFE",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    paddingHorizontal: 20,
    paddingVertical: 14
  },
  content: {
    gap: 4,
    paddingVertical: 8
  },
  button: {

  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textTransform: "capitalize"
  },
  heading: {
    fontWeight: "600",
  },
  text: {

  },
})

export default TreatmentItem