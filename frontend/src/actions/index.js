import * as types from '../actions/ActionTypes'

export const changeColorAction = RGB => {
  return {
    type: types.CHANGE_COLOR,
    payload: RGB,
  }
}

// ======================================> navigation action

export const navActive = item => {
  return {
    type: types.NAV_ITEM_ACTIVE,
    payload: item,
  }
}

// ======================================> navigation action end
