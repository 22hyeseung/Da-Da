const DEFAULT_DIARY_FOOD = {
  foodresult: [],
  reciperesult: [],
}

export const diaryFoodReducer = (
  state = DEFAULT_DIARY_FOOD,
  action,
) => {
  if (
    action.type === 'FETCHED_FOOD_LOGS_SUCCESS'
  ) {
    return {
      ...state,
      foodresult: [
        ...action.payload.foodresult,
      ].reverse(),
      reciperesult: [
        ...action.payload.reciperesult,
      ],
    }
  }
  if (action.type === 'POST_FOOD_TO_DATABASE') {
    return {
      foodresult: [
        action.payload,
        ...state.foodresult,
      ],
    }
  }
  return {
    ...state,
  }
}
