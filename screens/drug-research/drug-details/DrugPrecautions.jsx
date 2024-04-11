
import { StyleSheet, Text, View } from 'react-native'

const DrugPrecautions = ({ precautions }) => {
    return (
        <View style={styles.container}>
            <View style={styles.precautions}>
                <Text style={styles.title}>Precautions</Text>
                <Text>{precautions}</Text>
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
    precautions: {

    },
    title: {
        fontWeight: "700",
    }
})
export default DrugPrecautions