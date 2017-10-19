const INITIAL_STATE = {
  // color: '#16325c',
  // inverted: false,
  activeNavItem: '',
}

const navActiveItemReducer = (
  state = INITIAL_STATE,
  action = {},
) => {
  switch (action.type) {
    case 'CHANGE_NAV_ITEM_ACTIVE':
      return {
        ...state,
        activeNavItem: action.payload,
      }
    default:
      return state
  }
}

export default navActiveItemReducer
