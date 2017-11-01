const CALORY_SUMMARY_INITIAL_STATE = {
  summaryData: [],
  isLoading: false,
  errorState: false,
}

const NUTRITION_SUMMARY_INITIAL_STATE = {
  summaryData: {},
  isLoading: false,
  errorState: false,
}

export const calorySummaryReducer = (
  state = CALORY_SUMMARY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REPORTS_CALORIES_SUMMARY_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_REPORTS_CALORIES_SUMMARY_SUCCESS':
      return {
        ...state,
        summaryData: action.payload,
        isLoading: false,
      }
    case 'GET_REPORTS_CALORIES_SUMMARY_FAILED':
      return {
        ...state,
        isLoading: false,
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
        isLoading: true,
      }
    case 'GET_REPORTS_NUTRITION_SUMMARY_SUCCESS':
      return {
        ...state,
        summaryData: action.payload,
        isLoading: false,
      }
    case 'GET_REPORT_NUTRITION_SUMMARY_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}
