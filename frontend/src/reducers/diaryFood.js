const DEFAULT_DIARY_FOOD = {
  isSearchMode: null,
}

export const diaryFoodReducer = (
  state = DEFAULT_DIARY_FOOD,
  action,
) => {
  if (action.type === 'TOOGLE_SEARCH_HIDDEN') {
    return {
      ...state,
      isSearchMode: action.payload,
    }
  }
}
