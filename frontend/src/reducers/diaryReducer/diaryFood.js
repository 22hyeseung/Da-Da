const DEFAULT_DIARY_FOOD = {
  foodresult: [],
  reciperesult: [],
  foodAlbumResult: null,

  visionresult: [],
  visionresultKeyword: '',

  isPending: false,
  errorState: false,
}

export const diaryFoodReducer = (
  state = DEFAULT_DIARY_FOOD,
  action,
) => {
  // =============== Get food logs ================ //
  if (action.type === 'GET_FOOD_LOGS_REQUEST') {
    return {
      ...state,
      isPending: true,
    }
  }
  if (action.type === 'GET_FOOD_LOGS_SUCCESS') {
    return {
      ...state,
      foodresult: [
        ...action.payload.foodresult,
      ].reverse(),
      reciperesult: [
        ...action.payload.reciperesult,
      ],
      isPending: false,
    }
  }
  if (action.type === 'GET_FOOD_LOGS_FAILED') {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Post food logs ================ //
  if (
    action.type ===
    'POST_FOOD_TO_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'POST_FOOD_TO_DATABASE_SUCCESS'
  ) {
    return {
      isPending: true,
    }
  }
  if (
    action.type === 'POST_FOOD_TO_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }
  // =============== Post food logs ================ //
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_POST_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_POST_SUCCESS'
  ) {
    return {
      foodresult: [
        action.payload,
        ...state.foodresult,
      ],
      isPending: false,
    }
  }
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_POST_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Post food Image (vision) ================ //
  if (
    action.type ===
    'POST_FOOD_IMG_TO_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'POST_FOOD_IMG_TO_DATABASE_SUCCESS'
  ) {
    return {
      ...state,
      foodAlbumResult: action.payload.imgUrl,
      visionresult: action.payload.visionAnalysis,
      isPending: false,
    }
  }
  if (
    action.type ===
    'POST_FOOD_IMG_TO_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Clear Image search data ================ //
  if (action.type === 'CLEAR_IMG_SEARCH_DATA') {
    return {
      ...state,
      visionresult: action.payload,
    }
  }

  // =============== Save select food ================ //
  if (action.type === 'SAVE_SELECT_FOOD') {
    return {
      ...state,
      visionresultKeyword: action.payload,
    }
  }

  // =============== Clear select food ================ //
  if (action.type === 'CLEAR_SELECT_FOOD') {
    return {
      ...state,
      visionresultKeyword: action.payload,
    }
  }

  // =============== Clear select img url ================ //
  if (action.type === 'CLEAR_IMG_URL') {
    return {
      ...state,
      foodAlbumResult: action.payload,
    }
  }

  // =============== Update Food ================ //
  if (
    action.type ===
    'UPDATE_FOOD_OF_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'UPDATE_FOOD_OF_DATABASE_SUCCESS'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'UPDATE_FOOD_OF_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }
  // =============== get Update Food ================ //
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_UPDATE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_UPDATE_SUCCESS'
  ) {
    const updateFoodIndex = state.foodresult
      .map(item => item.eat_log_id)
      .indexOf(action.payload.eat_log_id)

    state.foodresult.splice(
      updateFoodIndex,
      1,
      action.payload,
    )

    return {
      ...state,
      foodresult: [...state.foodresult],
      isPending: false,
    }
  }
  if (
    action.type ===
    'GET_FOOD_DATA_NEXT_UPDATE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Delete Food ================ //
  if (
    action.type ===
    'DELETE_FOOD_OF_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'DELETE_FOOD_OF_DATABASE_SUCCESS'
  ) {
    const deleteFoodResult = state.foodresult.filter(
      item => item.eat_log_id !== action.payload,
    )
    return {
      ...state,
      foodresult: [...deleteFoodResult],
      isPending: false,
    }
  }
  if (
    action.type ===
    'DELETE_FOOD_OF_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============================== //
  return {
    ...state,
  }
}
