import * as types from './ActionTypes'
import API_HOST from '../config'

export const getFoodSummaryFromDB = date => {
  return dispatch => {
    dispatch({
      type: types.GET_FOOD_SUMMARY_REQUEST,
    })
    fetch(
      `${API_HOST}/eat-logs/summary/day?date=${date}`,
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

export const updateFoodSummary = (
  modifiedData,
  prevAmount,
) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_CHART_SUMMARY,
      payload: {
        modifiedCarb: modifiedData.food_carb,
        modifiedProt: modifiedData.food_protein,
        modifiedFat: modifiedData.food_fat,
        modifiedAmount:
          modifiedData.eat_log_amount,
        prevAmount,
      },
    })
  }
}
