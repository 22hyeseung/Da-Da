const INITIAL_STATE = {
  // color: '#16325c',
  // inverted: false,
  activeItem: '',
}

const navActiveItemReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'CHANGE_NAV_ITEM_ACTIVE') {
    return {
      ...state,
      activeItem: action.payload,
    }
  }
  return {
    ...state,
  }
}

export default navActiveItemReducer
