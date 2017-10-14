// 1. input에서 받은 weight 값을 db로 보내는 action(post)
// ===> 필요한 reducer:  받은 데이터로 상태변경
// 2. 갱신된 db 값 받는 action

const DEFAULT_WEIGHT_LISTS = {
  // 최신값 배열이 첫번째에오도록
  weightListItem: [],
  newWeight: [],
}

// Fetch한 데이터 변경해주는 reducer
export const weigthListReducer = (
  state = DEFAULT_WEIGHT_LISTS,
  action,
) => {
  if (action.type === 'FETCHED_WEIGHT_SUCCESS') {
    return {
      ...state,
      weightListItem: [...action.payload],
    }
  }
  return {
    ...state,
  }
}

// export default weigthListReducer
