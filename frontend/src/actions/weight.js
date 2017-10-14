import * as types from '../actions/ActionTypes'
import map from 'lodash/map'

// 1. db 값 받는 action
export const fetchWeightToDB = () => {
  return dispatch => {
    fetch(`http://localhost:3335/weightLists`)
      .then(res => res.json())
      // .then(data => {
      //   console.log(data)
      // })
      .then(data => {
        dispatch({
          type: types.FETCHED_WEIGHT_SUCCESS,
          payload: [...data],
        })
      })
      .catch(error => {
        console.log('error')
      })
  }
}

// 2. input에서 받은 값을 db로 보내는 action(post)
export const postWeightToDB = payload => {
  return dispatch => {
    fetch(`http://localhost:3335/weightLists/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    fetch(`http://localhost:3335/weightLists`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.FETCHED_WEIGHT_SUCCESS,
          payload: [...data],
        })
      })
      .catch(error => {
        console.log('error')
      })
  }
}
