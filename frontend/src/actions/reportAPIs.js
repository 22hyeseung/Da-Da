import * as types from './ActionTypes'
import rootApi from '../config'
import { dateDashToDateType } from '../helper/date'
import _ from 'lodash'

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
        // 날짜 기준 오름차순 정렬
        data.day_goal_kcal = _.orderBy(
          data.day_goal_kcal,
          ['diary_date'],
          ['asc'],
        )

        // 날짜 String타입 YYYY-MM-DD -> Date타입으로 변환
        data.day_goal_kcal.map(aDay => {
          aDay.diary_date = dateDashToDateType(
            aDay.diary_date,
          )
        })

        data.meal_kcal.map(meal => {
          meal.diary_date = dateDashToDateType(
            meal.diary_date,
          )
        })

        data.meal_kcal = _.groupBy(
          data.meal_kcal,
          'diary_date',
        )

        data.meal_kcal = _.map(
          data.meal_kcal,
          (val, key) => {
            const newVal = _.map(val, meal => ({
              [meal.eat_log_meal_tag]: meal.kcal,
            }))
            let destructuredObject = {}
            const destructuredNewVal = _.forEach(
              newVal,
              val => {
                destructuredObject[
                  Object.keys(val)
                ] = Object.values(val)[0]
              },
            )

            return {
              day: new Date(key),
              ...destructuredObject,
            }
          },
        )

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
        // console.log(data)
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
