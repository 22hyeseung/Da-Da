// helper: 오늘 날짜
import {
  dateDotToDateType,
  getDateNDaysBefore,
  getDateNDaysAfter,
  todaysDate,
  todaysDay,
  setDay,
  dateStringForApiQuery,
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

// const MOVED_TODAY_INITIAL_STATE = {
//   day: '',

// }

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
      const prevDate = getDateNDaysBefore(
        dateDotToDateType(action.payload),
        1,
      )
      // console.log(prevDate.toLocaleDateString())
      // console.log(setDay(prevDate.getDay()))
      return {
        date: getDateNDaysBefore(
          prevDate,
          1,
        ).toLocaleDateString(),
        day: setDay(
          getDateNDaysBefore(
            prevDate,
            1,
          ).getDay(),
        ),
        movedDay: setDay(prevDate.getDay()),
        movedDate: prevDate.toLocaleDateString(),
      }
    case 'MOVE_NEXT_DATE':
      const nextDate = getDateNDaysAfter(
        dateDotToDateType(action.payload),
        1,
      )
      return {
        date: getDateNDaysAfter(
          nextDate,
          1,
        ).toLocaleDateString(),
        day: setDay(
          getDateNDaysAfter(nextDate, 1).getDay(),
        ),
        movedDay: setDay(nextDate.getDay()),
        movedDate: nextDate.toLocaleDateString(),
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

// export const dateNavigationReducer = (
//   state = TODAY_INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     case 'MOVE_PREVIOUS_DATE':
//       const prevDate = getDateNDaysBefore(
//         dateDotToDateType(action.payload),
//         1,
//       )
//       return {
//         ...state,
//         movedDate: prevDate.toLocaleDateString(),
//         movedDay: setDay(prevDate.getDay()),
//       }
//     case 'MOVE_NEXT_DATE':
//       const nextDate = getDateNDaysAfter(
//         dateDotToDateType(action.payload),
//         1,
//       )
//       return {
//         ...state,
//         movedDate: nextDate.toLocaleDateString(),
//         movedDay: setDay(nextDate.getDay()),
//       }
//     default:
//       return state
//   }
// }
