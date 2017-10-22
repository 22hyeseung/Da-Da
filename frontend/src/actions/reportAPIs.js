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
          'Content-Type': 'application/json',
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
        const chartData = new Array()
        data.map(aDay => {
          chartData.push({
            day:
              aDay.eat_log_diary_date.substr(
                8,
                2,
              ) + '일',
            탄수화물: Math.round(aDay.carb * 4),
            단백질: Math.round(aDay.protein * 4),
            지방: Math.round(aDay.fat * 9),
          })
        })
        dispatch({
          type:
            types.GET_REPORTS_NUTRITION_SUCCESS,
          payload: chartData,
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
