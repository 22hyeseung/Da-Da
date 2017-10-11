import * as types from '../actions/ActionTypes'
export const changeColorAction = RGB => {
  return {
    type: types.CHANGE_COLOR,
    payload: RGB,
  }
}
