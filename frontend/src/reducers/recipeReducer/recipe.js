const DEFAULT_RECIPE = {
  recipeContent: {},
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
    }
  }
  return {
    ...state,
  }
}
