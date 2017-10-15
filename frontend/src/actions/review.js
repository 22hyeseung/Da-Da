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
    fetch(`${SERVER_HOSTNAME}/regret`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isPending: false,
          regretWrited: [
            result,
            ...this.state.regretWrited,
          ],
        })
      })
      .catch(res => {
        console.log(res)
        this.setState({
          isPending: false,
        })
      })
  }
}
