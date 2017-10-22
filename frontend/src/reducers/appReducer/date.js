const TODAY_INITIAL_STATE = {
  day: '',
  date: '',
}

const BEFORE_INITIAL_STATE = {
  beforeDay: '',
  beforeDate: '',
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
