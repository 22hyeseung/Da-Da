const INITIAL_STATE = {
  rootColor: [42, 133, 234],
}

const colorReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'CHANGE_COLOR') {
    return {
      ...state,
      rootColor: action.payload,
    }
  }
  return {
    ...state,
  }
}

export default colorReducer
