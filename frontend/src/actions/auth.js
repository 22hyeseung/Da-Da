export const loginUser = () => {
  return dispatch => {
    // 로그인 요청중 Action

    fetch(`http://api.downmix.net/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state
          .token}`,
      },
    })
      .then(res => {
        console.log(res, '<< [ res ]')
        return res.json()
      })
      .then(json => {
        dispatch({
          type: 'LOGIN_USER_SUCCESS',
          payload: {
            popupWindow: '',
            token: '',
            member_sns: json.member_provider,
            member_name:
              json.member_provider_name,
            member_avatar_url:
              json.member_avator_url,
          },
        })
        // console.log(json, '<< [ json ]')
      })
      .catch(error => {
        dispatch({
          type: 'LOGIN_USER_FAILED',
        })
      })
  }
}

export const logout = () => {
  return dispatch => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: 'LOGOUT',
        })
      })
      .catch(() => {
        console.log('LOGIN FAILED')
      })
  }
}
