// helper: 오늘 날짜
import {
  getDateNDaysBefore,
  getDateNDaysAfter,
  setDay,
} from '../../helper/date'

const TODAY_INITIAL_STATE = {
  day: null,
  date: null,
  movedDay: null,
  movedDate: null,
}

const BEFORE_INITIAL_STATE = {
  beforeDay: null,
  beforeDate: null,
}

export const todayDateReducer = (
  state = TODAY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'SET_TODAY_DATE':
      return {
        ...state,
        date: action.payload,
      }
    case 'SET_TODAY_DAY':
      return {
        ...state,
        day: action.payload,
      }
    case 'MOVE_PREVIOUS_DATE':
      return {
        date: action.payload.toLocaleDateString(),
        day: setDay(action.payload.getDay()),
        movedDay: setDay(action.payload.getDay()),
        movedDate: action.payload.toLocaleDateString(),
      }
    case 'MOVE_NEXT_DATE':
      return {
        date: action.payload.toLocaleDateString(),
        day: setDay(action.payload.getDay()),
        movedDay: setDay(action.payload.getDay()),
        movedDate: action.payload.toLocaleDateString(),
      }
    default:
      return state
  }
}

export const beforeDateReducer = (
  state = BEFORE_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'SET_BEFORE_DATE':
      return {
        ...state,
        beforeDate: action.payload,
      }
    case 'SET_BEFORE_DAY':
      return {
        ...state,
        beforeDay: action.payload,
      }
    default:
      return state
  }
}
