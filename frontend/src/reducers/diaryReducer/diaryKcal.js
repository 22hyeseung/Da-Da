const DEFAULT_USER_KCAL = {
  kcal: null,
}

export const diaryKcalReducer = (
  state = DEFAULT_USER_KCAL,
  action,
) => {
  if (
    action.type === 'GET_KCAL_SUCCESS'
  ) {
    return {
      ...state,
      kcal: action.payload.day_log_kcal,
    }
  }
  if (
    action.type === 'POST_KCAL_SUCCESS'
  ) {
    console.log(action.payload, '<< [ action.payload ]');
    return {
      ...state,
      kcal: action.payload.day_log_kcal,
    }
  }
  return {
    ...state,
  }
}
