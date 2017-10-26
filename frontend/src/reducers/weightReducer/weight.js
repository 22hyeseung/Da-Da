const DEFAULT_WEIGHT = {
  weightListItem: [],
}

const DEFAULT_ALL_LOG = {
  isLoading: false,
  errorState: false,
  allLog: [],
  goalWeight: null,
  startWeight: null,
}

// Fetch한 데이터 변경해주는 reducer
export const weightListReducer = (
  state = DEFAULT_WEIGHT,
  action,
) => {
  if (action.type === 'FETCHED_WEIGHT_SUCCESS') {
    return {
      ...state,
      weightListItem: [...action.payload],
      currentWeight: action.payload.shift()
        .day_log_kg,
    }
  }
  if (
    action.type === 'POST_AND_GET_WEIGHT_SUCCESS'
  ) {
    return {
      weightListItem: [...action.payload],
    }
  }
  if (
    action.type ===
    'DELETE_AND_GET_WEIGHT_SUCCESS'
  ) {
    return {
      weightListItem: [...action.payload],
    }
  }
  return {
    ...state,
  }
}

export const weightAllReducer = (
  state = DEFAULT_ALL_LOG,
  action,
) => {
  switch (action.type) {
    case 'GET_WEIGHT_ALL_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_WEIGHT_ALL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        allLog: action.payload.allLog,
        startWeight: action.payload.allLog.shift()
          .current,
        goalWeight: action.payload.goalWeight,
      }
    case 'GET_WEIGHT_ALL_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: false,
      }
    case 'UPDATE_WEIGHT_CHART':
      state.allLog.push({
        current: action.payload.day_log_kg,
        date: action.payload.diary_date
          .substr(5, 5)
          .replace('-', '/'),
        goal: state.goalWeight,
      })
      return {
        allLog: state.allLog,
      }
    default:
      return state
  }
}
