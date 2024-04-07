const symptomReducer = (state, action) => {
  if (action.type === "SET_AGE") {
    return { ...state, age: action.payload.age }
  }
  if (action.type === "SET_SEX") {
    return { ...state, sex: !state.sex }
  }
  if (action.type === "ADD_SYMPTOM") {
    return { ...state, selectedSymptoms: [...state.selectedSymptoms, action.payload.symptom] }
  }
  if (action.type === "REMOVE_SYMPTOM") {
    const updatedSelectedSymptoms = state.selectedSymptoms.filter(symptom => symptom !== action.payload.symptom)
    return { ...state, selectedSymptoms: updatedSelectedSymptoms }
  }
  if (action.type === "RESET_SYMPTOMS") {
    return { ...state, selectedSymptoms: [] }
  }
  if (action.type === "SET_TREATMENT_PLAN") {
    return { ...state, treatmentPlan: action.payload.treatmentPlan }
  }
}

export default symptomReducer