import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/styles'
import { useSymptomContext } from '../../context/symptom-context'
import Button from '../../components/ui/Button'
const AgeSexSelectorScreen = ({ navigation }) => {

  const { age, setAge, sex, setSex } = useSymptomContext()

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <View style={styles.ageContainer}>
          <Text style={styles.heading}>Select your Age</Text>
          <Text style={styles.ageValue}>{age}</Text>
          <View style={styles.ageSlider}>
            <Slider
              style={styles.slider}
              value={age}
              onValueChange={(value) =>{setAge(value)}}
              minimumValue={18}
              maximumValue={120}
              step={1}
            />
          </View>
        </View>

        <View style={styles.sexContainer}>
          <Text style={styles.heading}>Select Sex</Text>

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

        <View>
          <Button onPress={() => navigation.navigate("Lookup")}><Text>Next</Text></Button>
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
  },
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
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
    width: 300,
    height: "75%",
  },
  ageContainer: {
    width: "60%",
    gap: 8,
  },
  heading: {
    fontSize: 18,
    alignSelf: "center",
  },
  ageValue: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "700"
  },
  ageSlider: {

  },
  slider: {

  },
  sexContainer: {
    alignItems: "center",
    gap: 8,
  },
  sexSelections: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 36,
  },
  sexSelection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8,
  },
  sexSelected: {
    backgroundColor: colors.color
  },
  sexIcon: {
    alignItems: "center",
    justifyContent: "center"
  },
  sexText: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"

  }

})

export default AgeSexSelectorScreen