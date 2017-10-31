import * as types from '../actions/ActionTypes'
import API_HOST from '../config'
import { setDay } from '../helper/date'

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

export const setBeforeDateAndDay = date => {
  return dispatch => {
    const beforeDate = getDateNDaysBefore(
      dateDotToDateType(date),
      6,
    )
    dispatch({
      type: types.SET_BEFORE_DATE_AND_DAY,
      payload: {
        date: beforeDate.toLocaleDateString(),
        day: setDay(beforeDate.getDay()),
      },
    })
  }
}

export const moveToPrevDate = targetDate => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const prev = getDateNDaysBefore(
        dateDotToDateType(targetDate),
        1,
      )
      const prevBefore = getDateNDaysBefore(
        prev,
        6,
      )
      const param = { prev, prevBefore }

      if (targetDate) {
        dispatch({
          type: types.MOVE_PREVIOUS_DATE,
          payload: param,
        })
        resolve(param)
      } else {
        reject('Failed to move previous date.')
      }
    })
  }
}

export const moveToNextDate = targetDate => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const next = getDateNDaysAfter(
        dateDotToDateType(targetDate),
        1,
      )
      const nextBefore = getDateNDaysBefore(
        next,
        6,
      )
      const param = { next, nextBefore }
      if (targetDate) {
        dispatch({
          type: types.MOVE_NEXT_DATE,
          payload: param,
        })
        resolve(param)
      } else {
        reject('Failed to move previous date.')
      }
    })
  }
}
