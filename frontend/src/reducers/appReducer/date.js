// helper: 오늘 날짜
import { setDay } from '../../helper/date'

const TODAY_INITIAL_STATE = {
  day: null,
  date: null,
  beforeDay: null,
  beforeDate: null,
}

export const todayDateReducer = (
  state = TODAY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'SET_TODAY_DATE_AND_DAY':
      return {
        ...state,
        date: action.payload.date,
        day: action.payload.day,
      }
    case 'SET_BEFORE_DATE_AND_DAY':
      return {
        ...state,
        beforeDate: action.payload.date,
        beforeDay: action.payload.day,
      }
    case 'MOVE_PREVIOUS_DATE':
      // prev: 1일 전 날짜 (Date타입)
      // prevBefore: prev의 6일 전 날짜 (Date타입)
      const { prev, prevBefore } = action.payload
      return {
        date: prev.toLocaleDateString(),
        day: setDay(prev.getDay()),
        beforeDate: prevBefore.toLocaleDateString(),
        beforeDay: setDay(prevBefore.getDay()),
      }
    case 'MOVE_NEXT_DATE':
      // next: 1일 후 날짜 (Date타입)
      // nextBefore: next의 6일 전 날짜 (Date타입)
      const { next, nextBefore } = action.payload
      return {
        date: next.toLocaleDateString(),
        day: setDay(next.getDay()),
        beforeDate: nextBefore.toLocaleDateString(),
        beforeDay: setDay(nextBefore.getDay()),
      }
    default:
      return state
  }
}
