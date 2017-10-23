const CALORIE_CHART_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  caloriesLogsForAWeek: [],
}

const NUTRITION_CHART_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  nutritionFactsLogsForAWeek: [],
}

export const calorieCartReducer = (
  state = CALORIE_CHART_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REPORTS_CALORIES_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_REPORTS_CALORIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        caloriesLogsForAWeek: action.payload,
      }
    case 'GET_REPORTS_CALORIES_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}

export const nutritionChartReducer = (
  state = NUTRITION_CHART_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REPORTS_NUTRITION_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_REPORTS_NUTRITION_SUCCESS':
      return {
        ...state,
        isLoading: false,
        nutritionFactsLogsForAWeek:
          action.payload,
      }
    case 'GET_REPORTS_NUTRITION_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }

    default:
      return state
  }
}
