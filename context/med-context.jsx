import { createContext, useContext, useReducer } from 'react'
import medReducer from './med-reducer'
import connect from '../utils/connect'


const MedContext = createContext()

const initialState = {
  age: "18",
  sex: false,
  selectedSymptoms: [],
  treatmentPlan: [],
  drugInteractions: ""
}

const MedContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(medReducer, initialState)

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



  const setTreatmentPlan = (treatmentPlan) => {
    dispatch({ type: "SET_TREATMENT_PLAN", payload: { treatmentPlan } })
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
  const fetchDrugInformation = async (drug) => {
    try {
      const response = await connect.post("drug", { drug })
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  const fetchDrugInteractions = async (drugs) => {
    try {
      const response = await connect.post("interactions", { drugs: drugs })
      const { drugInteractions } = response.data
      dispatch({ type: "SET_DRUG_INTERACTIONS", payload: { drugInteractions }})
    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <MedContext.Provider value={
    {
      ...state,
      setAge,
      setSex,
      toggleSymptomSelect,
      resetSymptoms,
      fetchTreatmentPlan,
      fetchDrugInformation,
      fetchDrugInteractions,
      setTreatmentPlan
    }
  }>
    {children}
  </MedContext.Provider>
  )
}

export const useMedContext = () => useContext(MedContext)

export default MedContextProvider