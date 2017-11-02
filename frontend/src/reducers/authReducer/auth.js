const INITIAL_STATE = {
  token: localStorage.token,
  userInfo: {
    userName: null,
    userSNS: null,
    userAvatar: null,
  },
  isLoading: false,
  errorState: '',
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

  // =============== Get userInfo ================ //
  if (action.type === 'SAVE_USERINFO_REQUEST') {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === 'SAVE_USERINFO_SUCCESS') {
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
      isLoading: false,
    }
  }
  if (action.type === 'SAVE_USERINFO_FAILED') {
    return {
      ...state,
      errorState: true,
    }
  }

  // =============== Logout ================ //
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      token: action.payload,
      userInfo: action.payload,
    }
  }

  // =============== Post userInfo ================ //
  if (action.type === 'POST_USERINFO_REQUEST') {
    return {
      isLoading: true,
    }
  }
  if (action.type === 'POST_USERINFO_SUCCESS') {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === 'POST_USERINFO_FAILED') {
    return {
      ...state,
      errorState: true,
    }
  }

  return {
    ...state,
  }
}

export default authReducer
