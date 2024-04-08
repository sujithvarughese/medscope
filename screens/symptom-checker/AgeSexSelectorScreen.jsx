import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Slider } from '@miblanchard/react-native-slider';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/styles'
import { useSymptomContext } from '../../context/symptom-context'
import Button from '../../components/ui/Button'
const AgeSexSelectorScreen = ({ navigation }) => {

  const { age, setAge, sex, setSex } = useSymptomContext()

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.ageContainer}>
          <Text style={styles.heading}>Select your Age</Text>
          <Text style={styles.ageValue}>{age}</Text>
          <View style={styles.ageSlider}>
            <Slider
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "space-around",
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
  sexContainer: {
    alignItems: "center",

  },
  sexSelections: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 36,
  },
  sexSelection: {
    alignItems: "center",
    justifyContent: "center"
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