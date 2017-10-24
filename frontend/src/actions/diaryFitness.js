import * as types from '../actions/ActionTypes'
import rootApi from '../config'

// 1. db 값 받는 action
export const getFitnessLogsFromDB = date => {
  return dispatch => {
    fetch(`${rootApi}/exercises?date=${date}`, {
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
    fetch(`${rootApi}/exercises`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(result => result.json())
      // .then(result => {
      //   if (result) {
      //     console.log(payload.exercise_id)
      //     return fetch(
      //       `${rootApi}/exercises/${result[0]
      //         .burn_id}`,
      //       {
      //         method: 'GET',
      //         headers: {
      //           Authorization: `Bearer ${window
      //             .localStorage.token}`,
      //         },
      //       },
      //     )
      //       .then(res => res.json())
      .then(data => {
        // console.log(data, '<<')
        dispatch({
          type: types.POST_FITNESS_TO_DATABASE,
          payload: data,
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
) => {
  return dispatch => {
    fetch(`${rootApi}/exercises/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(result => result.json())
      .then(result => {
        if (result) {
          console.log(result)
          return fetch(
            `${rootApi}/eat-logs/${id}`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${window
                  .localStorage.token}`,
              },
            },
          )
            .then(res => res.json())
            .then(data => {
              console.log(data)
              dispatch({
                type:
                  types.UPDATE_FITNESS_OF_DATABASE,
                payload: data,
              })
            })
            .catch(error => {
              console.log(
                'fetchUpdateFitnessFromDB error',
              )
            })
        }
      })
      .catch(error => {
        console.log('updateFitnessOfDB error')
      })
  }
}

// 4. deleteFood
export const deleteFitnessOfDB = id => {
  return dispatch => {
    fetch(`${rootApi}/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(result => {
        if (result) {
          return dispatch({
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
