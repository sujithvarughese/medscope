
import { StyleSheet, Text, View } from 'react-native'

const DrugUses = ({ name, use }) => {

    return (
        <View style={styles.container}>
            <View style={styles.use}>
                <Text style={styles.title}>What is {name}?</Text>
                <Text>{use}</Text>
            </View>
            <Text>
                {name}
            </Text>
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
    use: {

    },
    title: {

    }
})
export default DrugUses