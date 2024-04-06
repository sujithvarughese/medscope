import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/styles'
import { useSymptomContext } from '../../context/symptom-context'
const AgeSexSelectorScreen = () => {

  const { age, setAge, sex, setSex } = useSymptomContext()
  console.log(age)

  return (
    <View style={styles.container}>

      <View style={styles.ageContainer}>
        <Text style={styles.heading}>Enter your Age</Text>
        <Text style={styles.ageValue}></Text>
        <View style={styles.ageSlider}>
          <Slider
            value="18"
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
            <Ionicons style={styles.sexIcon} name="male-outline" size={48} color="black" />
            <Text style={styles.sexText}>Male</Text>
          </Pressable>

          <Pressable style={[styles.sexSelection, !sex && styles.sexSelected]} onPress={() => setSex(false)}>
            <Ionicons style={styles.sexIcon} name="female-outline" size={48} color="black" />
            <Text style={styles.sexText}>Female</Text>
          </Pressable>

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",

    flex: 1,
    margin: 24,
    alignItems: "center",
    gap: 24
  },
  ageContainer: {

  },
  sexContainer: {


  },
  heading: {
    fontSize: 16,
  },
  ageValue: {
    alignSelf: "center",
    fontSize: 16,
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
    fontSize: 16,

  }

})

export default AgeSexSelectorScreen