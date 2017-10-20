import * as types from './ActionTypes'
import rootApi from '../config'

export const changeMode = isPostMode => {
  return {
    type: types.CHANGE_MODE,
    payload: !isPostMode,
  }
}

export const getShortLogFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_SHORTLOG_REQUEST,
    })
    fetch(
      `${rootApi}/diary/regret?date=${date}`,
      {
        method: 'GET',
        header: {
          Authorization: `Bearer ${window
            .localStorage.token}`,
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_SHORTLOG_SUCCESS,
          payload: [...data],
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_SHORTLOG_FAILED,
        })
      })
  }
}

export const postShortLogToDB = requestBody => {
  return dispatch => {
    dispatch({
      type: types.POST_SHORTLOG_REQUEST,
    })
    fetch(`${rootApi}/diary/regret`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: types.POST_SHORTLOG_SUCCESS,
          payload: result,
        })
      })
      .catch(error => {
        dispatch({
          type: types.POST_SHORTLOG_FAILED,
        })
        console.log(error)
      })
  }
}

export const getLongLogFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_LONGLOG_REQUEST,
    })
    fetch(
      `${rootApi}/diary/comment?date=${date}`,
      {
        method: 'GET',
        header: {
          Authorization: `Bearer ${window
            .localStorage.token}`,
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_LONGLOG_SUCCESS,
          payload: [...data],
        })
        console.log(data)
      })
      .catch(error => {
        dispatch({
          type: types.GET_LONGLOG_FAILED,
        })
      })
  }
}

export const postLongLogToDB = requestBody => {
  return dispatch => {
    dispatch({
      type: types.GET_LONGLOG_REQUEST,
    })
    fetch(`${rootApi}/diary/comment`, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: types.POST_LONGLOG_SUCCESS,
          payload: result,
        })
      })
      .catch(error => {
        dispatch({
          type: types.POST_LONGLOG_FAILED,
        })
      })
  }
}
