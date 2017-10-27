const SUMMARY_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  calorieSummary: [],
}

export const diarySummaryReducer = (
  state = SUMMARY_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_FOOD_SUMMARY_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_FOOD_SUMMARY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        calorieSummary: [
          {
            name: '탄수화물',
            value: action.payload.today_carb,
          },
          {
            name: '단백질',
            value: action.payload.today_protein,
          },
          {
            name: '지방',
            value: action.payload.today_fat,
          },
        ],
      }
    case 'GET_FOOD_SUMMARY_FAILED':
      return {
        ...state,
        isLoading: false,
        errorState: true,
      }

    // DIARY FOOD 컴포넌트가 업데이트 (아이템 추가/수정/삭제)되는 경우
    // 차트도 함께 업데이트 해준다.
    case 'UPDATE_CALORIE_SUMMARY':
      return {
        ...state,
        calorieSummary: [
          {
            name: '탄수화물',
            value:
              state.calorieSummary[0].value +
              action.payload.food_carb,
          },
          {
            name: '단백질',
            value:
              state.calorieSummary[1].value +
              action.payload.food_protein,
          },
          {
            name: '지방',
            value:
              state.calorieSummary[2].value +
              action.payload.food_fat,
          },
        ],
      }

    case 'DELETE_CALORIE_SUMMARY':
      return {
        ...state,
        calorieSummary: [
          {
            name: '탄수화물',
            value:
              state.calorieSummary[0].value -
              action.payload.food_carb,
          },
          {
            name: '단백질',
            value:
              state.calorieSummary[1].value -
              action.payload.food_protein,
          },
          {
            name: '지방',
            value:
              state.calorieSummary[2].value -
              action.payload.food_fat,
          },
        ],
      }
    default:
      return state
  }
}
