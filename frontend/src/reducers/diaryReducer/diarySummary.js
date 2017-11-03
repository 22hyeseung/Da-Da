const SUMMARY_INITIAL_STATE = {
  isLoading: false,
  errorState: false,
  eatKcal: 0,
  burnKcal: 0,
  nutritionKcals: [],
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
        eatKcal: Math.round(
          action.payload.today_kcal,
        ),
        burnKcal: Math.round(
          action.payload.today_burn_kcal,
        ),
        nutritionKcals: [
          {
            name: '탄수화물',
            value: Math.round(
              action.payload.today_carb,
            ),
          },
          {
            name: '단백질',
            value: Math.round(
              action.payload.today_protein,
            ),
          },
          {
            name: '지방',
            value: Math.round(
              action.payload.today_fat,
            ),
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
    // 차트와 summary도 함께 업데이트 해준다.
    case 'ADD_CHART_SUMMARY':
      return {
        ...state,
        eatKcal: Math.round(
          state.eatKcal +
            action.payload.food_carb * 4 +
            action.payload.food_protein * 4 +
            action.payload.food_fat * 9,
        ),

        nutritionKcals: [
          {
            name: '탄수화물',
            value: Math.round(
              state.nutritionKcals[0].value +
                action.payload.food_carb * 4,
            ),
          },
          {
            name: '단백질',
            value: Math.round(
              state.nutritionKcals[1].value +
                action.payload.food_protein * 4,
            ),
          },
          {
            name: '지방',
            value: Math.round(
              state.nutritionKcals[2].value +
                action.payload.food_fat * 9,
            ),
          },
        ],
      }

    case 'UPDATE_CHART_SUMMARY':
      const {
        modifiedCarb,
        modifiedProtein,
        modifiedFat,
        modifiedAmount,
        beforeAmount,
      } = action.payload

      // 수정 전 양에 따른 탄수화물 칼로리
      const beforeCarbKcal =
        modifiedCarb /
        modifiedAmount * // 식품 1g당 탄수화물 양
        beforeAmount * // 이전에 등록한 양
        4 // 이전에 등록한 양의 탄수화물 칼로리

      // 수정 전 양에 따른 단백질 칼로리
      const beforeProteinKcal =
        modifiedProtein /
        modifiedAmount *
        beforeAmount *
        4

      // 수정 전 양에 따른 지방 칼로리
      const beforeFatKcal =
        modifiedFat /
        modifiedAmount *
        beforeAmount *
        9

      return {
        // 현재 섭취 칼로리 - 수정 전 양에 따른 칼로리 + 수정한 양에 따른 칼로리
        ...state,
        eatKcal: Math.round(
          state.eatKcal -
            (beforeCarbKcal +
              beforeProteinKcal +
              beforeFatKcal) +
            (modifiedCarb * 4 +
              modifiedProtein * 4 +
              modifiedFat * 9),
        ),
        nutritionKcals: [
          {
            name: '탄수화물',
            value: Math.round(
              state.nutritionKcals[0].value -
              beforeCarbKcal + // 기존 칼로리
                modifiedCarb * 4, // 수정한 칼로리
            ),
          },
          {
            name: '단백질',
            value: Math.round(
              state.nutritionKcals[1].value -
              beforeProteinKcal + // 기존 칼로리
                modifiedProtein * 4, // 수정한 칼로리
            ),
          },
          {
            name: '지방',
            value: Math.round(
              state.nutritionKcals[2].value -
              beforeFatKcal + // 기존 칼로리
                modifiedFat * 9, // 수정한 칼로리
            ),
          },
        ],
      }

    case 'DELETE_CHART_SUMMARY':
      return {
        ...state,
        eatKcal: Math.round(
          state.eatKcal -
            action.payload.food_carb * 4 -
            action.payload.food_protein * 4 -
            action.payload.food_fat * 9,
        ),
        nutritionKcals: [
          {
            name: '탄수화물',
            value: Math.round(
              state.nutritionKcals[0].value -
                action.payload.food_carb * 4,
            ),
          },
          {
            name: '단백질',
            value: Math.round(
              state.nutritionKcals[1].value -
                action.payload.food_protein * 4,
            ),
          },
          {
            name: '지방',
            value: Math.round(
              state.nutritionKcals[2].value -
                action.payload.food_fat * 9,
            ),
          },
        ],
      }
    case 'ADD_SUMMARY_OF_BURN_CALORIE':
      return {
        ...state,
        burnKcal: state.burnKcal + action.payload,
      }
    case 'UPDATE_SUMMARY_OF_BURN_CALORIE':
      // 현재 소모 칼로리 - 수정 전 시간에 따른 소모 칼로리 + 수정한 시간에 따른 소모 칼로리
      const {
        modifiedBurnKcal,
        kcalPer1Min,
        beforeMinute,
      } = action.payload
      return {
        ...state,
        burnKcal: Math.round(
          state.burnKcal - // 현재 소모 칼로리
          kcalPer1Min * beforeMinute + // 1분당 소모 칼로리 * 수정 전 운동 시간
            modifiedBurnKcal, // 수정한 시간에 따른 소모 칼로리
        ),
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
