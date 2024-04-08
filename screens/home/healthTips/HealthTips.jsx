import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import connect from '../../../utils/connect'


const HealthTips = () => {

  const [tip, setTip] = useState("")

  const fetchHealthTip = async () => {
    try {
      const response = await connect("health")
      const { healthTip } = response.data
      setTip(healthTip)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchHealthTip()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Health tip of the day</Text>
      <Text style={styles.text}>{tip}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    gap: 6,
    backgroundColor: "white",
    padding: 6,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {

  }
})

export default HealthTips