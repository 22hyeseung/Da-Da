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
  beforeAmount,
) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_CHART_SUMMARY,
      payload: {
        modifiedCarb: modifiedData.food_carb,
        modifiedProtein:
          modifiedData.food_protein,
        modifiedFat: modifiedData.food_fat,
        modifiedAmount:
          modifiedData.eat_log_amount,
        beforeAmount,
      },
    })
  }
}

export const updateFitnessSummary = (
  modifiedData,
  beforeMinute,
) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_SUMMARY_OF_BURN_CALORIE,
      payload: {
        modifiedBurnKcal:
          modifiedData[0].burn_kcal, // 수정한 소모 칼로리
        kcalPer1Min:
          modifiedData[0].exercise_burn_kcal, // 1분당 소요 칼로리
        beforeMinute, // 수정 전 소요 시간
      },
    })
  }
}
