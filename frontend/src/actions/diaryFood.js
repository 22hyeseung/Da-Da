import * as types from '../actions/ActionTypes'

export const toggleSearchMode = () => {
  return {
    type: types.TOOGLE_SEARCH_HIDDEN,
    payload: false,
  }
}
