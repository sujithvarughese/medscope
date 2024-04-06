import { createContext, useContext, useReducer, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import connect from '../utils/connect'

const SymptomContext = createContext()

const initialState = {
  age: "18",
  sex: "male",
  selectedConditions: [],
  treatmentPlan: [],
}

const reducer = (state, action) => {
  if (action.type === "SET_AGE") {
    return { ...state, age: action.payload.age }
  }
  if (action.type === "SET_SEX") {
    return { ...state, age: action.payload.sex }
  }
  if (action.type === "SET_SELECTED_CONDITIONS") {
    return { ...state, age: action.payload.selectedConditions }
  }
}

const SymptomProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const setAge = (age) => dispatch({ type: "SET_AGE", payload: { age }})

  const setSex = (sex) => dispatch({ type: "SET_SEX", payload: { sex }})

  const addSymptom = (symptom) => dispatch({ type: "ADD_SYMPTOM", payload: { selectedConditions }})
  const removeSymptom = (symptom) => dispatch({ type: "REMOVE_SYMPTOM", payload: { selectedConditions }})

/*
  const setTreatmentPlan = () => {}
  const removeSelectedCondition = (conditionToRemove) => {
    const updatedSelectedConditions = state.selectedConditions.filter(condition => condition !== conditionToRemove)
    setSelectedConditions(updatedSelectedConditions)
  }
  const resetConditions = () => {
    setSelectedConditions([])
  }

  const fetchTreatmentPlan = async ({ age, sex, medicalConditions }) => {
    try {
      const response = await connect.post("conditions", { age, sex, medicalConditions })
      const { treatmentPlan } = response.data
      setTreatment(treatmentPlan)
    } catch (error) {
      throw new Error(error)
    }
  }*/
  return <SymptomContext.Provider value={
    {
      ...state,
      setAge,
      setSex,
    }
  }>
    {children}
  </SymptomContext.Provider>
}

const useSymptomContext = () => useContext(SymptomContext)

export { SymptomProvider, useSymptomContext }