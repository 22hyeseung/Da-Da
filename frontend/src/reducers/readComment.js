const INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  commentWrited: [],
}

const readingCommentReducer = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        commentWrited: action.payload,
      }
    case 'GET_COMMENT_REQUEST':
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
    case 'POST_COMMENT_TO_DATABASE':
      return {
        ...state,
        commentWrited: action.payload,
      }
    default:
      return state
  }
}

export default readingCommentReducer
