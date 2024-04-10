
import { StyleSheet, Text, View } from 'react-native'


const DrugSideEffects = ({ sideEffects }) => {
    return (
      <View style={styles.container}>
          <View style={styles.sideEffects}>
              <Text style={styles.title}>Side Effects</Text>
              <View>
                  {sideEffects?.map((sideEffect, index) =>
                    <Text key={index} style={styles.text}><Text>{'\u00B7'}</Text>{sideEffect}</Text>)}
              </View>
          </View>
      </View>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        gap: 4,
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

    title: {
        fontWeight: "700",
    },
    sideEffects: {

    },
    text: {
        textTransform: "capitalize",
    },
})
export default DrugSideEffects