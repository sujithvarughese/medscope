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
    gap: 6,
    padding: 6
  },
  heading: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {

  }
})

export default HealthTips