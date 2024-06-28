import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { medicalConditionListSorted } from '../../data/medicalConditions'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { colors } from '../../utils/styles'
import { useMedContext } from '../../context/med-context'
import Button from '../../components/ui/Button'
import ListSearch from '../../components/ListSearch'

const SymptomLookupScreen = ({ navigation }) => {

  const { fetchTreatmentPlan } = useMedContext()

  const handleSubmit = () => {
    fetchTreatmentPlan()
    navigation.navigate("Results")
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ListSearch list={medicalConditionListSorted} buttonText="Search" placeholder="Search symptom e.g. headache" onSubmit={handleSubmit} />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 12
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around",
  },
  searchBar: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 28,
    paddingRight: 12,
    paddingVertical: 6,
    width: 280,
    justifyContent: "center",
    margin: 12,
    height: 42,
  },
  searchIcon: {
    position: "absolute",
    paddingHorizontal: 6,
    alignSelf: "flex-start",
  },
  selectedListContainer: {
    width: 300,
    backgroundColor: colors.colorGray,
    padding: 20,
    borderRadius: 6,
    alignItems: "center",
    gap: 12
  },
  selectedList: {
    width: "100%",
    gap: 6,
  },
  selectedItem: {
    backgroundColor: colors.colorLight,
    padding: 4,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  selectedItemText: {

  },
  list: {
    width: "100%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 20,
    maxWidth: "90%",
    textTransform: "capitalize",
  }
})
export default SymptomLookupScreen