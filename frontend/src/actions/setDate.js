import * as types from '../actions/ActionTypes'
import API_HOST from '../config'
import {
  dateDotToDateType,
  getDateNDaysBefore,
  getDateNDaysAfter,
} from '../helper/date'

export const setTodayDate = date => ({
  type: types.SET_TODAY_DATE,
  payload: date,
})

export const setTodayDay = day => ({
  type: types.SET_TODAY_DAY,
  payload: day,
})

export const setBeforeDate = date => ({
  type: types.SET_BEFORE_DATE,
  payload: date,
})

export const setBeforeDay = day => ({
  type: types.SET_BEFORE_DAY,
  payload: day,
})

export const moveToPrevDate = targetDate => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const prevDate = getDateNDaysBefore(
        dateDotToDateType(targetDate),
        1,
      )
      if (targetDate) {
        dispatch({
          type: types.MOVE_PREVIOUS_DATE,
          payload: prevDate,
        })
        resolve(prevDate)
      } else {
        reject('Failed to move previous date.')
      }
    })
  }
}

export const moveToNextDate = targetDate => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const nextDate = getDateNDaysAfter(
        dateDotToDateType(targetDate),
        1,
      )
      if (targetDate) {
        dispatch({
          type: types.MOVE_NEXT_DATE,
          payload: nextDate,
        })
        resolve(nextDate)
      } else {
        reject('Failed to move previous date.')
      }
    })
  }
}
