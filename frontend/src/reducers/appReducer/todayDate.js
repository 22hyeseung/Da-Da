const INITIAL_STATE = {
  day: '',
  date: '',
}

const todayDateReducer = (
  state = INITIAL_STATE,
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

export default todayDateReducer
