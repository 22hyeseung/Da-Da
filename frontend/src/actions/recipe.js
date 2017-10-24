import * as types from '../actions/ActionTypes'
import rootApi from '../config'

export const getRecipe = () => {
  return dispatch => {
    fetch(`${rootApi}/recipe/search/1`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: types.GET_RECIPE_SUCCESS,
          payload: data,
        })
      })
      .catch(error => {
        console.log('getRecipe error')
      })
  }
}
