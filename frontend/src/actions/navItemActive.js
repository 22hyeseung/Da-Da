import * as types from '../actions/ActionTypes'

export const changeNavigationItemActive = navItem => {
  return {
    type: types.CHANGE_NAV_ITEM_ACTIVE,
    payload: navItem,
  }
}
