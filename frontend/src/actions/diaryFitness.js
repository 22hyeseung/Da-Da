import * as types from '../actions/ActionTypes'
import API_HOST from '../config'

// 1. db 값 받는 action
export const getFitnessLogsFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_FITNESS_LOGS_REQUEST,
    })
    fetch(`${API_HOST}/exercises?date=${date}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_FITNESS_LOGS_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_FITNESS_LOGS_FAILED,
        })
      })
  }
}

// 2. input에서 받은 값을 db로 보내는 action(post)
export const postFitnessToDB = requestBody => {
  return dispatch => {
    dispatch({
      type:
        types.POST_FITNESS_TO_DATABASE_REQUEST,
    })
    fetch(`${API_HOST}/exercises`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(result => result.json())
      .then(data => {
        dispatch({
          type:
            types.POST_FITNESS_TO_DATABASE_SUCCESS,
          payload: data,
        })
        dispatch({
          type: types.ADD_SUMMARY_OF_BURN_CALORIE,
          payload: data[0].burn_kcal,
        })
      })
      .catch(error => {
        dispatch({
          type:
            types.POST_FITNESS_TO_DATABASE_FAILED,
        })
      })
  }
}
// 3. updateDB
export const updateFitnessOfDB = (
  requestBody,
  id,
) => {
  return dispatch => {
    dispatch({
      type:
        types.UPDATE_FITNESS_OF_DATABASE_REQUEST,
    })
    return new Promise((resolve, reject) => {
      fetch(`${API_HOST}/exercises/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${window
            .localStorage.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data, 'response data')
          if (data) {
            dispatch({
              type:
                types.UPDATE_FITNESS_OF_DATABASE_SUCCESS,
              payload: data,
            })
            resolve(data)
          } else {
            reject('Failed to update data.')
          }
        })
        .catch(error => {
          dispatch({
            type:
              types.UPDATE_FITNESS_OF_DATABASE_FAILED,
          })
        })
    })
  }
}

// 4. deleteFood
export const deleteFitnessOfDB = (
  id,
  burnKcal,
) => {
  return dispatch => {
    dispatch({
      type:
        types.DELETE_FITNESS_OF_DATABASE_REQUEST,
    })
    fetch(`${API_HOST}/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          dispatch({
            type:
              types.DELETE_FITNESS_OF_DATABASE_SUCCESS,
            payload: id,
          })
          dispatch({
            type:
              types.DELETE_SUMMARY_OF_BURN_CALORIE,
            payload: burnKcal,
          })
        }
      })
      .catch(error => {
        dispatch({
          type:
            types.UPDATE_FITNESS_OF_DATABASE_FAILED,
        })
      })
  }
}
