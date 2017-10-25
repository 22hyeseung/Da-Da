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
  if (action.type === 'UPDATE_FOOD_OF_DATABASE') {
    const updateFoodIndex = state.foodresult
      .map(item => item.eat_log_id)
      .indexOf(action.payload.eat_log_id)

    state.foodresult.splice(
      updateFoodIndex,
      1,
      action.payload,
    )
    // action.type.eat_log_id
    return {
      ...state,
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
