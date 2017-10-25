const KCAL_GOALS_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  kcalGoal: 0,
}

export const calorieGoalReducer = (
  state = KCAL_GOALS_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'KCAL_GOALS_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'KCAL_GOALS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        kcalGoal: action.payload,
      }
    case 'KCAL_GOALS_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}
