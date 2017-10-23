import * as types from '../actions/ActionTypes'
// helper: 오늘 날짜
import { setDay } from '../helper/date'

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
