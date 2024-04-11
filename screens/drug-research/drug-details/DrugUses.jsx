
import { StyleSheet, Text, View } from 'react-native'

const DrugUses = ({ name, description, uses }) => {

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.heading}>What is {name}?</Text>
                <Text style={styles.text}>{description}</Text>
            </View>

            <View>
                <Text style={styles.heading}>Uses</Text>
                {uses.map((use, index) => <Text key={index} style={styles.list}>{'\u00B7'} {use}</Text>)}
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
    list: {
        fontSize: 16,
        lineHeight: 22,
        textTransform: "capitalize"
    }

})
export default DrugUses