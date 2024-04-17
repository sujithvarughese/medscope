import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import connect from '../../../utils/connect'
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.heading}>
        <Ionicons style={styles.icon} name="fitness-sharp" size={24} color="red" />
        <Text style={styles.title}>Health tip of the day</Text>
      </View>
      <Text style={styles.text}>{tip}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
    backgroundColor: "white",
    padding: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 6,
  },
  heading: {
    flexDirection: "row",
    gap: 8,
  },
  icon: {

  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    fontSize: 16,
    lineHeight: 22
  }
})

export default HealthTips