// helper: 오늘 날짜
import {
  getDateNDaysBefore,
  getDateNDaysAfter,
  setDay,
} from '../../helper/date'

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
    case 'SET_BEFORE_DATE_AND_DAY':
      return {
        ...state,
        beforeDate: action.payload.date,
        beforeDay: action.payload.day,
      }
    case 'MOVE_PREVIOUS_DATE':
      // action.payload: Date타입 1일전 날짜
      return {
        date: action.payload.toLocaleDateString(),
        day: setDay(action.payload.getDay()),
        beforeDate: getDateNDaysBefore(
          action.payload,
          6,
        ).toLocaleDateString(),
        beforeDay: setDay(
          getDateNDaysBefore(
            action.payload,
            6,
          ).getDay(),
        ),
      }
    case 'MOVE_NEXT_DATE':
      // action.payload: Date타입 1일후 날짜
      return {
        date: action.payload.toLocaleDateString(),
        day: setDay(action.payload.getDay()),
        beforeDate: getDateNDaysBefore(
          action.payload,
          6,
        ).toLocaleDateString(),
        beforeDay: setDay(
          getDateNDaysBefore(
            action.payload,
            6,
          ).getDay(),
        ),
      }
    default:
      return state
  }
}

// export const beforeDateReducer = (
//   state = BEFORE_INITIAL_STATE,
//   action,
// ) => {
//   switch (action.type) {
//     // case 'SET_BEFORE_DATE_AND_DAY':
//     //   return {
//     //     beforeDate: action.payload.date,
//     //     beforeDay: action.payload.day,
//     //   }
//     case 'MOVE_PREVIOUS_BEFORE_DATE':
//       return {
//         beforeDate: action.payload.toLocaleDateString(),
//         beforeDay: setDay(
//           action.payload.getDay(),
//         ),
//       }
//     case 'MOVE_NEXT_BEFORE_DATE':
//       return {
//         beforeDate: action.payload.toLocaleDateString(),
//         beforeDay: setDay(
//           action.payload.getDay(),
//         ),
//       }
//     default:
//       return state
//   }
// }
