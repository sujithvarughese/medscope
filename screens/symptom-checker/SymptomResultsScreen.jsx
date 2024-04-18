import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useMedContext } from '../../context/med-context'
import TreatmentItem from './TreatmentItem'
import LoadingOverlay from '../../components/ui/LoadingOverlay'

const SymptomResultsScreen = () => {

  const { treatmentPlan } = useMedContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.heading}>Treatment Options</Text>
        <View style={styles.treatment}>
          {treatmentPlan?.map(item =>
            <TreatmentItem
              key={item.name}
              setIsLoading={setIsLoading}
              name={item.name}
              directions={item.directions}
            />)}
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    gap: 24,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
    paddingVertical: 12,
    width: 300,
    height: "80%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center"
  },
  treatment: {

    gap: 24,
  }
})
export default SymptomResultsScreen