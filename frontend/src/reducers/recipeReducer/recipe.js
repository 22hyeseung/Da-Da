const DEFAULT_RECIPE = {
  recipeContent: {},
  recipe: [],
  recipeIngredient: [],
  defaultServing: null,
  serving: null,
  isLoading: false,
  errorState: false,
}

const DEFAULT_RECIPE_LIST = {
  recipeList: [],
}

export const recipeReducer = (
  state = DEFAULT_RECIPE,
  action,
) => {
  switch (action.type) {
    case 'GET_RECIPE_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_RECIPE_SUCCESS':
      return {
        ...state,
        recipeContent: action.payload,
        recipe: action.payload.recipe,
        recipeIngredient:
          action.payload.recipe_ingredient,
        defaultServing:
          action.payload.recipe_serving,
        serving: action.payload.recipe_serving,
        isLoading: false,
      }
    case 'GET_RECIPE_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'CHANGE_SERVING':
      return {
        ...state,
        // payload: 문자열
        serving: action.payload * 1, // -> number로 형변환
      }
    default:
      return state
  }
}

export const recipeSearchReducer = (
  state = DEFAULT_RECIPE_LIST,
  action,
) => {
  if (
    action.type === 'GET_RECIPE_SEARCH_SUCCESS'
  ) {
    return {
      ...state,
      recipeList: action.payload,
    }
  }
  return {
    ...state,
  }
}
