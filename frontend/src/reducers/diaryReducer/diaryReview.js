const INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  shortLogSaved: [],
  longLogSaved: [],
}

export const shortLogReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_SHORTLOG_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_SHORTLOG_SUCCESS':
      return {
        ...state,
        isLoading: false,
        shortLogSaved: action.payload,
      }
    case 'GET_SHORTLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'POST_SHORTLOG_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_SHORTLOG_SUCCESS':
      return {
        ...state,
        shortLogSaved: action.payload,
      }
    case 'POST_SHORTLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}

export const longLogReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_LONGLOG_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_LONGLOG_SUCCESS':
      return {
        ...state,
        isLoading: false,
        longLogSaved: action.payload,
      }
    case 'GET_LONGLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'POST_LONGLOG_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_LONGLOG_SUCCESS':
      return {
        ...state,
        longLogSaved: action.payload,
      }
    case 'POST_LONGLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
  }
}
