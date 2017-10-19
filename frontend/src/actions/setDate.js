import * as types from '../actions/ActionTypes'

export const setTodayDate = date => ({
  type: types.SET_TODAY_DATE,
  payload: date,
})

export const setTodayDay = day => ({
  type: types.SET_TODAY_DAY,
  payload: day,
})
