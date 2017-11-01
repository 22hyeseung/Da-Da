const INITIAL_STATE = {
  token: localStorage.token,
  userInfo: {
    userName: null,
    userSNS: null,
    userAvatar: null,
  },
  signingIn: false, // 로그인 진행중일 떄 진행중 표시를 하기 위한 Flag
  errorState: '', // 로그인 중에 문제가 생겼습니다 라고 알리기 위한 Flag
}

const authReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'SAVE_TOKEN') {
    return {
      ...state,
      token: action.payload,
    }
  }
  if (action.type === 'LOGIN_USER_REQUEST') {
    return {
      ...state,
      signingIn: true,
      errorState: false,
    }
  }
  if (action.type === 'SAVE_USERINFO') {
    return {
      ...state,
      userInfo: {
        userName:
          action.payload.user
            .member_provider_name,
        userSNS:
          action.payload.user.member_provider,
        userAvatar:
          action.payload.user.member_avatar_url,
        userGoalWeight:
          action.payload.user.member_goal_weight,
        userGender:
          action.payload.user.member_gender,
        userBirth:
          action.payload.user.member_birth,
        userJoinDate: new Date(
          action.payload.user.member_join_date,
        ).toLocaleDateString(),
        userDefaultKcal: action.payload
          .default_kcal
          ? action.payload.default_kcal
              .day_log_kcal
          : '',
        userDefault: action.payload.default_kcal,
      },
      signingIn: false,
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
      token: action.payload,
      userInfo: action.payload,
    }
  }
  return {
    ...state,
  }
}

export default authReducer
