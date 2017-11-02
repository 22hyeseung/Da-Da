import * as types from '../actions/ActionTypes'
import API_HOST from '../config'

export const saveToken = token => {
  return {
    type: types.SAVE_TOKEN,
    payload: token,
  }
}

// 로그인 이후 토큰 값으로 사용자정보를 갖고오는 action
export const getUserInfo = () => {
  return dispatch => {
    dispatch({
      type: types.SAVE_USERINFO_REQUEST,
    })
    fetch(`${API_HOST}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(userInfo => {
        dispatch({
          type: types.SAVE_USERINFO_SUCCESS,
          payload: userInfo,
        })
      })
      .catch(error => {
        dispatch({
          type: types.SAVE_USERINFO_FAILED,
        })
      })
  }
}

export const logOut = () => {
  return {
    type: types.LOGOUT,
    payload: null,
  }
}

export const postUserInfo = payload => {
  return dispatch => {
    dispatch({
      type: types.POST_USERINFO_REQUEST,
    })
    return new Promise((resolve, reject) => {
      fetch(`${API_HOST}/user/first`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${window
            .localStorage.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then(data => {
          dispatch({
            type: types.POST_USERINFO_SUCCESS,
          })
          if (data) {
            resolve('data posted successfully.')
          } else {
            reject('Failed to post data.')
          }
        })
        .catch(error => {
          dispatch({
            type: types.POST_USERINFO_FAILED,
          })
        })
    })
  }
}
