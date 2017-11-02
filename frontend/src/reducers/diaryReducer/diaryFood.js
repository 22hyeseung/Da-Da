const DEFAULT_DIARY_FOOD = {
  foodresult: [],
  reciperesult: [],
  foodAlbumResult: '',
  visionresult: [],
  visionresultKeyword: '',
}

export const diaryFoodReducer = (
  state = DEFAULT_DIARY_FOOD,
  action,
) => {
  if (action.type === 'GET_FOOD_LOGS_SUCCESS') {
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
  if (
    action.type === 'POST_FOOD_IMG_TO_DATABASE'
  ) {
    return {
      ...state,
      foodAlbumResult: action.payload.imgUrl,
      visionresult: action.payload.visionAnalysis,
    }
  }
  if (action.type === 'CLEAR_IMG_SEARCH_DATA') {
    return {
      ...state,
      visionresult: action.payload,
    }
  }
  if (action.type === 'SAVE_SELECT_FOOD') {
    return {
      ...state,
      visionresultKeyword: action.payload,
    }
  }

  if (action.type === 'CLEAR_SELECT_FOOD') {
    return {
      ...state,
      visionresultKeyword: action.payload,
    }
  }

  if (action.type === 'CLEAR_IMG_URL') {
    return {
      ...state,
      foodAlbumResult: action.payload,
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

    return {
      foodresult: [...state.foodresult],
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
