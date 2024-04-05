import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/ui/Button'
import { useEffect } from 'react'
import { colors } from '../../utils/styles'
const AgeSexSelector = ({ age, setAge, sex, setSex }) => {

  useEffect(() => {
    console.log(sex)
  }, [sex])

  return (
    <View style={styles.container}>

      <View style={styles.ageContainer}>
        <Text style={styles.heading}>Enter your Age</Text>
        <Text style={styles.ageValue}>{age}</Text>
        <View style={styles.ageSlider}>
          <Slider
            value={age}
            onValueChange={(value) => setAge(value)}
            minimumValue={18}
            maximumValue={120}
            step={1}
          />
        </View>
      </View>

      <View style={styles.sexContainer}>
        <Text style={styles.heading}>Select Gender</Text>

        <View style={styles.sexSelections}>

          <Pressable style={[styles.sexSelection, !!sex && styles.sexSelected]} onPress={() => setSex(true)}>
            <Ionicons style={styles.sexIcon} name="male-outline" size={64} color="black" />
            <Text style={styles.sexText}>Male</Text>
          </Pressable>

          <Pressable style={[styles.sexSelection, !sex && styles.sexSelected]} onPress={() => setSex(false)}>
            <Ionicons style={styles.sexIcon} name="female-outline" size={64} color="black" />
            <Text style={styles.sexText}>Female</Text>
          </Pressable>

        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    width: 300,
    height: 300,

  },
  ageContainer: {

  },
  sexContainer: {


  },
  heading: {
    fontSize: 20,
  },
  ageValue: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "700"

  },
  ageSlider: {
  },
  sexSelections: {
    flexDirection: "row",
  },
  sexSelection: {
    alignItems: "center",
  },
  sexSelected: {
    backgroundColor: colors.color
  },
  sexIcon: {

  },
  sexText: {
    fontSize: 18,

  }

})

export default AgeSexSelector