const DEFAULT_STATE = {
  token: '',
  member_sns: '',
  member_name: '',
  member_avatar_url: '',
  signingIn: false, // 로그인 진행중일 떄 진행중 표시를 하기 위한 Flag
  errorState: '', // 로그인 중에 문제가 생겼습니다 라고 알리기 위한 Flag
}

const authReducer = (
  state = DEFAULT_STATE,
  action,
) => {
  if (action.type === 'LOGIN_USER_REQUEST') {
    return {
      ...state,
      signingIn: true,
      errorState: false,
    }
  }
  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      signingIn: false,
      member_sns: action.payload.member_sns,
      member_name:
        action.payload.member_provider_name,
      member_avatar_url:
        action.payload.member_avator_url,
    }
  }
  if (action.type === 'LOGIN_USER_FAILED') {
    return {
      ...state,
      signingIn: false,
      errorState: true,
    }
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      member_sns: '',
      member_name: '',
      member_avatar_url: '',
    }
  }
  return {
    ...state,
  }
}

export default authReducer
