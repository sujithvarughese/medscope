import { createContext, useContext, useReducer } from 'react'
import symptomReducer from './symptom-reducer'
import connect from '../utils/connect'




const SymptomContext = createContext()

const initialState = {
  age: "",
  sex: false,
  selectedSymptoms: [],
  treatmentPlan: [],
}

const SymptomProvider = ({ children }) => {

  const [state, dispatch] = useReducer(symptomReducer, initialState)

  const setAge = (age) => dispatch({ type: "SET_AGE", payload: { age }})
  const setSex = () => dispatch({ type: "SET_SEX" })

  const toggleSymptomSelect = (symptom) => {
    if (state.selectedSymptoms.length >= 5 && !state.selectedSymptoms.includes(symptom)) {
      console.log("5 conditions max")
      return
    }
    if (!state.selectedSymptoms.includes(symptom)) {
      dispatch({ type: "ADD_SYMPTOM", payload: { symptom }})
    } else {
      dispatch({ type: "REMOVE_SYMPTOM", payload: { symptom }})
    }
  }

  const resetSymptoms = () => {
    dispatch({ type: "RESET_SYMPTOMS" })
  }

  const fetchTreatmentPlan = async () => {
    try {
      const response = await connect.post("conditions", { age: state.age, sex: state.sex, medicalConditions: state.selectedSymptoms })
      const { treatmentPlan } = response.data
      dispatch({ type: "SET_TREATMENT_PLAN", payload: { treatmentPlan }})
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <SymptomContext.Provider value={
    {
      ...state,
      setAge,
      setSex,
      toggleSymptomSelect,
      resetSymptoms,
      fetchTreatmentPlan
    }
  }>
    {children}
  </SymptomContext.Provider>
  )
}

export const useSymptomContext = () => useContext(SymptomContext)

export default SymptomProvider