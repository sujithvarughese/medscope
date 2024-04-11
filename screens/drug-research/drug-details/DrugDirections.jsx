
import { StyleSheet, Text, View } from 'react-native'


const DrugDirections = ({ directions }) => {
    return (
      <View style={styles.container}>
          <View>
              <Text style={styles.heading}>Directions for Use</Text>
              <Text style={styles.text}>{directions}</Text>
          </View>
      </View>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        gap: 16,
        padding: 12,
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    heading: {
        fontWeight: "700",
        paddingVertical: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
    },
})
export default DrugDirections