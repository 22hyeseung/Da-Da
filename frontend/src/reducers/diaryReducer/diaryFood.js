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
  if (action.type === 'DELETE_FOOD_OF_DATABASE') {
    const deleteFoodResult = state.foodresult.filter(
      item => item.eat_log_id !== action.payload,
    )
    return {
      foodresult: [...deleteFoodResult],
    }
  }
  return {
    ...state,
  }
}
