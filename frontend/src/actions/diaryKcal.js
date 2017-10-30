import * as types from '../actions/ActionTypes'
import API_HOST from '../config'

export const getGoalKcal = date => {
  return dispatch => {
    dispatch({
      type: types.GET_KCAL_REQUEST,
    })
    fetch(`${API_HOST}/diary/kcal?date=${date}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_KCAL_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        type: types.GET_KCAL_FAILED
        console.log('getKcal error')
      })
  }
}

export const postGoalKcal = param => {
  return dispatch => {
    dispatch({
      type: types.POST_KCAL_REQUEST,
    })
    fetch(`${API_HOST}/diary/kcal`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
      body: JSON.stringify(param),
    })
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: types.POST_KCAL_SUCCESS,
          payload: result[0],
        })
      })
      .catch(error => {
        type: types.POST_KCAL_FAILED
        console.log('postKcal error')
      })
  }
}
