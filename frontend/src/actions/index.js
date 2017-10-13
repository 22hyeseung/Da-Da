import * as types from '../actions/ActionTypes'

export const changeColorAction = RGB => {
  return {
    type: types.CHANGE_COLOR,
    payload: RGB,
  }
}

// ======================================> navigation action

export const changeNavigationItemActive = item => {
  return {
    type: types.CHANGE_NAV_ITEM_ACTIVE,
    payload: item,
  }
}

// ======================================> navigation action end
