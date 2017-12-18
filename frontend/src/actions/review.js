import * as types from './ActionTypes'
import API_HOST from '../config'

export const changeModeComment = (currentMode) => {
  return {
    type: types.CHANGE_MODE_COMMENT,
    payload: !currentMode,
  }
}

export const changeModeArticle = (currentMode) => {
  return {
    type: types.CHANGE_MODE_ARTICLE,
    payload: !currentMode,
  }
}

export const getCommentFromDB = (date) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_COMMENT_REQUEST,
    })
    fetch(`${API_HOST}/diary/regret?date=${date}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_COMMENT_SUCCESS,
          payload: data,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.GET_COMMENT_FAILED,
        })
      })
  }
}

export const postCommentToDB = (requestBody) => {
  return (dispatch) => {
    dispatch({
      type: types.POST_COMMENT_REQUEST,
    })
    fetch(`${API_HOST}/diary/regret`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${window.localStorage.token}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: types.POST_COMMENT_SUCCESS,
          payload: result,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.POST_COMMENT_FAILED,
        })
        console.error(error)
      })
  }
}

export const deleteCommentOfDB = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_COMMENT_REQUEST,
    })
    fetch(`${API_HOST}/diary/regret/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: types.DELETE_COMMENT_SUCCESS,
          payload: result,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.DELETE_COMMENT_FAILED,
        })
      })
  }
}

export const getArticleFromDB = (date) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_ARTICLE_REQUEST,
    })
    fetch(`${API_HOST}/diary/comment?date=${date}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: types.GET_ARTICLE_SUCCESS,
          payload: data,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.GET_ARTICLE_FAILED,
        })
      })
  }
}

export const postArticleToDB = (requestBody) => {
  return (dispatch) => {
    dispatch({
      type: types.GET_ARTICLE_REQUEST,
    })
    fetch(`${API_HOST}/diary/comment`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${window.localStorage.token}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: types.POST_ARTICLE_SUCCESS,
          payload: result,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.POST_ARTICLE_FAILED,
        })
      })
  }
}

export const deleteArticleOfDB = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_ARTICLE_REQUEST,
    })
    fetch(`${API_HOST}/diary/comment/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch({
          type: types.DELETE_ARTICLE_SUCCESS,
          payload: result,
        })
      })
      .catch((error) => {
        dispatch({
          type: types.DELETE_ARTICLE_FAILED,
        })
        console.error(error)
      })
  }
}
