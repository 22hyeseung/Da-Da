const CALORY_SUMMARY_INITIAL_STATE = {
  summaryData: [],
}

const NUTRITION_SUMMARY_INITIAL_STATE = {
  summaryData: {},
}

export const calorySummaryReducer = (
  state = CALORY_SUMMARY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REPORTS_CALORIES_SUMMARY_REQUEST':
      return {
        ...state,
      }
    case 'GET_REPORTS_CALORIES_SUMMARY_SUCCESS':
      return {
        ...state,
        summaryData: action.payload,
      }
    case 'GET_REPORTS_CALORIES_SUMMARY_FAILED':
      return {
        ...state,
      }
    default:
      return state
  }
}

export const nutritionSummaryReducer = (
  state = NUTRITION_SUMMARY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REPORTS_NUTRITION_SUMMARY_REQUEST':
      return {
        ...state,
      }
    case 'GET_REPORTS_NUTRITION_SUMMARY_SUCCESS':
      return {
        ...state,
        summaryData: action.payload,
      }
    case 'GET_REPORT_NUTRITION_SUMMARY_FAILED':
      return {
        ...state,
      }
    default:
      return state
  }
}
