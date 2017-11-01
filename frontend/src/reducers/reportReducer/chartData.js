const CALORIE_CHART_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  goalCaloriePerWeek: [],
  totalMealLogPerWeek: [],
  defaultGoalCalorie: 0,
}

const NUTRITION_CHART_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  nutritionFactsLogsPerWeek: [],
}

export const calorieChartReducer = (
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
        goalCaloriePerWeek:
          action.payload.day_goal_kcal,
        totalMealLogPerWeek:
          action.payload.meal_kcal,
        defaultGoalCalorie:
          action.payload.default_goal_kcal,
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
        nutritionFactsLogsPerWeek: action.payload,
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
