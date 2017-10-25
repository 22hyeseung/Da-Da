const DEFAULT_RECIPE = {
  recipeContent: {},
  recipe: [],
  recipeIngredient: [],
}

export const recipeReducer = (
  state = DEFAULT_RECIPE,
  action,
) => {
  if (action.type === 'GET_RECIPE_SUCCESS') {
    console.log(action.payload, '<< [ action.type ]');
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
