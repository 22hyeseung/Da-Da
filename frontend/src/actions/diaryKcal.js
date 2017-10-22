import * as types from '../actions/ActionTypes'
import rootApi from '../config'

export const getKcal = () => {
  return dispatch => {
    dispatch({
      type: types.GET_KCAL_REQUEST,
    })
    fetch(`${rootApi}/diary/kcal?date=20171022`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, '<< [ data ]');
        dispatch({
          type: types.GET_KCAL_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        console.log('getKcal error')
      })
  }
}
