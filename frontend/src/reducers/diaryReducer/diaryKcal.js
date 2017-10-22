const DEFAULT_USER_KCAL = {
  targetKcal: null,
}

export const diaryKcalReducer = (
  state = DEFAULT_USER_KCAL,
  action,
) => {
  if (
    action.type === 'GET_KCAL_SUCCESS'
  ) {
    console.log(state, '<< [ state ]');
    return {
      ...state,
      targetKcal: action.payload,
    }
  }

  return {
    ...state,
  }
}
