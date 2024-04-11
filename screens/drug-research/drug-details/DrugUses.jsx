
import { StyleSheet, Text, View } from 'react-native'

const DrugUses = ({ name, description, uses, directions }) => {

    return (
        <View style={styles.container}>

            <View style={styles.description}>
                <Text style={styles.heading}>What is {name}?</Text>
                <Text>{description}</Text>
            </View>
            <View>
                <Text style={styles.heading}>Uses</Text>
                {uses.map(use => <Text>{use}</Text>)}
            </View>
            <View>
                <Text style={styles.heading}></Text>
                <Text>{directions}</Text>
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
    heading: {

    },
    description: {

    },
    uses: {

    },
    directions: {

    },

})
export default DrugUses