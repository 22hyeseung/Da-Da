import * as types from '../actions/ActionTypes'

export const changeColorAction = RGB => {
  return {
    type: types.CHANGE_COLOR,
    payload: RGB,
  }
}

// ======================================> navigation & tab action

export const changeNavigationItemActive = navItem => {
  return {
    type: types.CHANGE_NAV_ITEM_ACTIVE,
    payload: navItem,
  }
}

export const changeTabItemActive = tabItem => {
  return {
    type: types.CHANGE_TAB_ITEM_ACTIVE,
    payload: tabItem,
  }
}
// ======================================> navigation & tab action end
