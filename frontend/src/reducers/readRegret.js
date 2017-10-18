const INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  regretWrited: [],
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
        regretWrited: action.payload,
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
    case 'POST_REGRET_TO_DATABASE':
      return {
        ...state,
        regretWrited: action.payload,
      }
    default:
      return state
  }
}

export default readingRegretReducer
