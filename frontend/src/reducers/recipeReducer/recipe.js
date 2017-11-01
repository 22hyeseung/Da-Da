const DEFAULT_RECIPE = {
  recipeContent: {},
  recipe: [],
  recipeIngredient: [],
}

const DEFAULT_RECIPE_LIST = {
  recipeList: [],
}

export const recipeReducer = (
  state = DEFAULT_RECIPE,
  action,
) => {
  if (action.type === 'GET_RECIPE_SUCCESS') {
    return {
      ...state,
      recipeContent: action.payload,
      recipe: action.payload.recipe,
      recipeIngredient: action.payload.recipe_ingredient,
    }
  }
  return {
    ...state,
  }
}

export const recipeSearchReducer = (
  state = DEFAULT_RECIPE_LIST,
  action,
) => {
  if (action.type === 'GET_RECIPE_SEARCH_SUCCESS') {
    return {
      ...state,
      recipeList: action.payload,
    }
  }
  return {
    ...state,
  }
}
