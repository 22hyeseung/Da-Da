const SUMMARY_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  nutritionKcals: [],
  eatKcal: 0,
  burnKcal: 0,
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
        nutritionKcals: [
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
        eatKcal: Math.round(
          action.payload.today_kcal,
        ),
        burnKcal: Math.round(
          action.payload.today_burn_kcal,
        ),
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
        nutritionKcals: [
          {
            name: '탄수화물',
            value: Math.round(
              state.nutritionKcals[0].value +
                action.payload.food_carb,
            ),
          },
          {
            name: '단백질',
            value: Math.round(
              state.nutritionKcals[1].value +
                action.payload.food_protein,
            ),
          },
          {
            name: '지방',
            value: Math.round(
              state.nutritionKcals[2].value +
                action.payload.food_fat,
            ),
          },
        ],
      }

    case 'UPDATE_LIST_SUMMARY':
      return {
        ...state,
        eatKcal: Math.round(
          action.payload.today_kcal,
        ),
        burnKcal: Math.round(
          action.payload.today_burn_kcal,
        ),
      }

    case 'DELETE_CALORIE_SUMMARY':
      return {
        ...state,
        nutritionKcals: [
          {
            name: '탄수화물',
            value:
              state.nutritionKcals[0].value -
              action.payload.food_carb,
          },
          {
            name: '단백질',
            value:
              state.nutritionKcals[1].value -
              action.payload.food_protein,
          },
          {
            name: '지방',
            value:
              state.nutritionKcals[2].value -
              action.payload.food_fat,
          },
        ],
      }

    case 'UPDATE_SUMMARY_OF_BURN_CALORIE':
      return {
        ...state,
        burnKcal: state.burnKcal + action.payload,
      }
    case 'DELETE_SUMMARY_OF_BURN_CALORIE,':
      return {
        ...state,
        burnKcal: state.burnKcal - action.payload,
      }
    default:
      return state
  }
}
