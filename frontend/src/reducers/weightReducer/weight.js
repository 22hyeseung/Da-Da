// 1. input에서 받은 weight 값을 db로 보내는 action(post)
// ===> 필요한 reducer:  받은 데이터로 상태변경
// 2. 갱신된 db 값 받는 action

const INITIAL_STATE = {
  // 최신값 배열이 첫번째에오도록
  weightListItem: [],
}

// Fetch한 데이터 변경해주는 reducer
export const weigthListReducer = (
  state = INITIAL_STATE,
  action,
) => {
  if (action.type === 'FETCHED_WEIGHT_SUCCESS') {
    return {
      ...state,
      weightListItem: [...action.payload],
    }
  }
  if (action.type === 'POST_WEIGHT_TO_DATABASE') {
    return {
      weightListItem: [
        action.payload,
        ...state.weightListItem,
      ],
    }
  }
  return {
    ...state,
  }
}

// export default weigthListReducer
