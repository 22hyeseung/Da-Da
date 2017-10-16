import * as types from '../actions/ActionTypes'

// ======================================> navigation action

export const changeNavigationItemActive = item => {
  return {
    type: types.CHANGE_NAV_ITEM_ACTIVE,
    payload: item,
  }
}

// ======================================> navigation action end
