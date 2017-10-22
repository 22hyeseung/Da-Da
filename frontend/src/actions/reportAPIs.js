import * as types from './ActionTypes'
import rootApi from '../config'

export const getCaloriesForAWeekFromDB = (
  startDate,
  endDate,
) => {
  return dispatch => {
    dispatch({
      type: types.GET_REPORTS_CALORIES_REQUEST,
    })
    fetch(
      `${rootApi}/report/kcal/days?start_date=${startDate}&end_date=${endDate}`,
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
          type:
            types.GET_REPORTS_CALORIES_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        dispatch({
          type: types.GET_REPORTS_CALORIES_FAILED,
        })
      })
  }
}

export const getNutritionFactsForAWeekFromDB = (
  startDate,
  endDate,
) => {
  return dispatch => {
    dispatch({
      type: types.GET_REPORTS_NUTRITION_REQUEST,
    })
    fetch(
      `${rootApi}/report/nutrition/days?start_date=${startDate}&end_date=${endDate}`,
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
          type:
            types.GET_REPORTS_NUTRITION_SUCCESS,
          payload: data,
        })
      })
      .catch(err => {
        dispatch({
          type:
            types.GET_REPORTS_NUTRITION_FAILED,
        })
      })
  }
}
