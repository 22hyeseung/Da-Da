import * as types from '../actions/ActionTypes'

export const saveToken = token => {
  return {
    type: types.SAVE_TOKEN,
    payload: token,
  }
}

// 로그인 이후 토큰 값으로 사용자정보를 갖고오는 action
export const getUserInfo = data => {
  return {
    type: types.SAVE_USERINFO,
    payload: data,
  }
}

// export const logout = () => {
//   return dispatch => {
//     auth
//       .signOut()
//       .then(() => {
//         dispatch({
//           type: 'LOGOUT',
//         })
//       })
//       .catch(() => {
//         console.log('LOGIN FAILED')
//       })
//   }
// }
