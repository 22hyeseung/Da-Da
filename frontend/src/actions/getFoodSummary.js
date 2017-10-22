import * as types from './ActionTypes'
import rootApi from '../config'

export const getFoodSummaryFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_FOOD_SUMMARY_REQUEST,
    })
    fetch(
      `${rootApi}/eat-logs/summary?date=${date}`,
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
        dispatch({
          type: types.GET_FOOD_SUMMARY_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_FOOD_SUMMARY_FAILED,
        })
        console.error(error)
      })
  }
}
