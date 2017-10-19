const INITIAL_STATE = {
  isSearchMode: null,
}

export const diaryFoodReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'TOOGLE_SEARCH_HIDDEN') {
    return {
      ...state,
      isSearchMode: action.payload,
    }
  }
}
