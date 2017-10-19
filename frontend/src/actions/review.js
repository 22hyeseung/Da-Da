import * as types from './ActionTypes'
import rootApi from '../config'

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
          type: types.GET_REQUEST_FAILED,
        })
      })
  }
}

export const postShortLogToDB = requestBody => {
  return dispatch => {
    return fetch(`${rootApi}/diary/regret`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: types.POST_SHORTLOG_TO_DATABASE,
          payload: result,
        })
      })
      .catch(res => {
        console.log(res)
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
      })
      .catch(error => {
        dispatch({
          type: types.GET_REQUEST_FAILED,
        })
      })
  }
}

export const postLongLogToDB = requestBody => {
  return dispatch => {
    return fetch(`${rootApi}/diary/comment`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: types.POST_LONGLOG_TO_DATABASE,
          payload: result,
        })
      })
      .catch(res => {
        console.log(res)
      })
  }
}
