import * as types from './ActionTypes'
import { SERVER_HOSTNAME } from '../config'

export const getRegretFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_REGRET_REQUEST,
    })
    fetch(
      `${SERVER_HOSTNAME}/regret?date=${date}`,
    )
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_REGRET_SUCCESS,
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

export const postRegretToDB = requestBody => {
  return dispatch => {
    fetch(`${SERVER_HOSTNAME}/regret/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
