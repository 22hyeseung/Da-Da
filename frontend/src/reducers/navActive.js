const INITIAL_STATE = {
  // color: '#16325c',
  // inverted: false,
  activeItem: '',
}

const navActiveReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'NAV_ITEM_ACTIVE') {
    return {
      ...state,
      activeItem: action.payload,
    }
  }
  return {
    ...state,
  }
}

export default navActiveReducer
