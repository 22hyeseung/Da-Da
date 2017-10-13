import * as types from '../actions/ActionTypes'

const INITIAL_STATE = {
  // color: '#16325c',
  // inverted: false,
  activeNavItem: '',
  activeTabItem: '식단',
}

const navActiveItemReducer = (
  state = INITIAL_STATE,
  action = {},
) => {
  switch (action.type) {
    case types.CHANGE_NAV_ITEM_ACTIVE:
      return {
        ...state,
        activeNavItem: action.payload,
      }
    default:
      return state
  }
}

export default navActiveItemReducer
