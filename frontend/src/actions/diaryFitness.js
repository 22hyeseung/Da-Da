import * as types from '../actions/ActionTypes'
import API_HOST from '../config'

// 1. db 값 받는 action
export const getFitnessLogsFromDB = date => {
  return dispatch => {
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
          type:
            types.FETCHED_FITNESS_LOGS_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        console.log('fetchFitnessLogsToDB error')
      })
  }
}

// 2. input에서 받은 값을 db로 보내는 action(post)
export const postFitnessToDB = payload => {
  return dispatch => {
    // console.log(payload)
    fetch(`${API_HOST}/exercises`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(result => result.json())
      .then(data => {
        // console.log(data[0].burn_kcal)
        // console.log(data, '<<')
        dispatch({
          type: types.POST_FITNESS_TO_DATABASE,
          payload: data,
        })
        dispatch({
          type:
            types.UPDATE_SUMMARY_OF_BURN_CALORIE,
          payload: data[0].burn_kcal,
        })
      })
      .catch(error => {
        console.log('fetchFitnessLogsToDB error')
      })
  }
}
// 3. updateDB
export const updateFitnessOfDB = (
  payload,
  id,
  onSuccessCb,
) => {
  return dispatch => {
    fetch(`${API_HOST}/exercises/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(result => result.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: types.UPDATE_FITNESS_OF_DATABASE,
          payload: data,
        })
        onSuccessCb()
      })
      .catch(error => {
        console.log('updateFitnessOfDB error')
      })
  }
}

// 4. deleteFood
export const deleteFitnessOfDB = id => {
  return dispatch => {
    fetch(`${API_HOST}/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(result => {
        if (result) {
          dispatch({
            type:
              types.DELETE_FITNESS_OF_DATABASE,
            payload: id,
          })
        }
      })
      .catch(error => {
        console.log('deleteFitnessOfDB error')
      })
  }
}
