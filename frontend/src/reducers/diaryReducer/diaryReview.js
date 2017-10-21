const SHORT_INITIAL_STATE = {
  isLoading: false,
  isPostMode: true,
  errorState: false,
  shortLogSaved: [],
}

const LONG_INITIAL_STATE = {
  isLoading: false,
  isEditorMode: true,
  errorState: false,
  longLogSaved: [],
}

export const shortLogReducer = (
  state = SHORT_INITIAL_STATE,
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
        isPostMode: false,
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
        isLoading: false,
        isPostMode: false,
        shortLogSaved: action.payload,
      }
    case 'POST_SHORTLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'DELETE_SHORTLOG_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'DELETE_SHORTLOG_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isPostMode: true,
        shortLogSaved: action.payload,
      }
    case 'DELETE_SHORTLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'CHANGE_MODE_SHORT':
      return {
        ...state,
        isPostMode: action.payload,
      }
    default:
      return state
  }
}

export const longLogReducer = (
  state = LONG_INITIAL_STATE,
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
        isEditorMode: false,
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
        isEditorMode: false,
        longLogSaved: action.payload,
      }
    case 'POST_LONGLOG_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'CHANGE_MODE_LONG':
      return {
        ...state,
        isEditorMode: action.payload,
      }
    default:
      return state
  }
}
