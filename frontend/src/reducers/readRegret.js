const INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  regretMessage: [],
}

const readingRegretReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_REGRET_SUCCESS':
      return {
        ...state,
        isLoading: false,
        regretMessage: action.payload,
      }
    case 'GET_REGRET_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_REQUEST_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}

export default readingRegretReducer
