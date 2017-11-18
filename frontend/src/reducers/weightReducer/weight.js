const DEFAULT_WEIGHT = {
  isLoading: false,
  errorState: false,
  currentWeight: null,
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
  switch (action.type) {
    case 'FETCHED_WEIGHT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCHED_WEIGHT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        weightListItem: [...action.payload],
        currentWeight:
          action.payload[0].day_log_kg,
      }
    case 'FETCHED_WEIGHT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'POST_AND_GET_WEIGHT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'POST_AND_GET_WEIGHT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        weightListItem: [...action.payload],
      }
    case 'POST_AND_GET_WEIGHT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    case 'DELETE_AND_GET_WEIGHT_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'DELETE_AND_GET_WEIGHT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        weightListItem: [...action.payload],
      }
    case 'DELETE_AND_GET_WEIGHT_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }
    default:
      return state
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
        startWeight:
          action.payload.allLog[0].current,
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
        goalWeight: state.goalWeight,
        startWeight: state.startWeight,
      }
    default:
      return state
  }
}
