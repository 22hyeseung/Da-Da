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
  console.log('sdfa')
  return dispatch => {
    dispatch({
      type: 'abc',
    })
    return fetch(`${SERVER_HOSTNAME}/regret`, {
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
          type: types.POST_REGRET_TO_DATABASE,
          payload: result,
        })
      })
      .catch(res => {
        console.log(res)
      })
  }
}
