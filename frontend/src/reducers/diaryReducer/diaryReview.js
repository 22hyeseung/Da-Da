const COMMENT_INITIAL_STATE = {
  isLoading: false,
  isPostMode: true,
  errorState: false,
  commentSaved: [],
}

const ARTICLE_INITIAL_STATE = {
  isLoading: false,
  isEditorMode: true,
  errorState: false,
  articleSaved: [],
}

export const commentReducer = (
  state = COMMENT_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_COMMENT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isPostMode: false,
        commentSaved: action.payload,
      }
    case 'GET_COMMENT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'POST_COMMENT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isPostMode: false,
        commentSaved: action.payload,
      }
    case 'POST_COMMENT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'DELETE_COMMENT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'DELETE_COMMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        commentSaved: action.payload,
      }
    case 'DELETE_COMMENT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'CHANGE_MODE_COMMENT':
      return {
        ...state,
        isPostMode: action.payload,
      }
    default:
      return state
  }
}

export const articleReducer = (
  state = ARTICLE_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_ARTICLE_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isEditorMode: false,
        articleSaved: action.payload,
      }
    case 'GET_ARTICLE_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'POST_ARTICLE_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_ARTICLE_SUCCESS':
      return {
        ...state,
        isEditorMode: false,
        articleSaved: action.payload,
      }
    case 'POST_ARTICLE_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'DELETE_ARTICLE_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'DELETE_ARTICLE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        articleSaved: action.payload,
      }
    case 'DELETE_ARTICLE_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'CHANGE_MODE_ARTICLE':
      return {
        ...state,
        isEditorMode: action.payload,
      }
    default:
      return state
  }
}
