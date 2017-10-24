const DEFAULT_DIARY_FITNESS = {
  fitnessResult: [],
}

export const diaryFitnessReducer = (
  state = DEFAULT_DIARY_FITNESS,
  action,
) => {
  if (
    action.type === 'FETCHED_FITNESS_LOGS_SUCCESS'
  ) {
    return {
      ...state,
      fitnessResult: [
        ...action.payload,
      ].reverse(),
    }
  }
  if (
    action.type === 'POST_FITNESS_TO_DATABASE'
  ) {
    return {
      fitnessResult: [
        ...action.payload,
        ...state.fitnessResult,
      ],
    }
  }
  if (
    action.type === 'UPDATE_FITNESS_OF_DATABASE'
  ) {
    const updateFoodIndex = state.foodresult
      .map(item => item.eat_log_id)
      .indexOf(action.payload.eat_log_id)
    const updateFood = state.foodresult.splice(
      updateFoodIndex,
      1,
      action.payload,
    )
    console.log(
      updateFoodIndex,
      updateFood,
      action.payload,
      state.foodresult,
    )
    // action.type.eat_log_id
    return {
      // foodresult: [...updateFood],
    }
  }
  if (
    action.type === 'DELETE_FITNESS_OF_DATABASE'
  ) {
    const deleteFitnessResult = state.fitnessResult.filter(
      item => item.burn_id !== action.payload,
    )
    return {
      fitnessResult: [...deleteFitnessResult],
    }
  }
  return {
    ...state,
  }
}
