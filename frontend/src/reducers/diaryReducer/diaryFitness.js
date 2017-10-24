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
    const updateFitnessIndex = state.fitnessResult
      .map(item => item.burn_id)
      .indexOf(action.payload.burn_id)
    state.fitnessResult.splice(
      updateFitnessIndex,
      1,
      action.payload,
    )
    // const updateFitness = _.fill(
    //   state.fitnessResult,
    //   action.payload,
    //   updateFitnessIndex,
    //   updateFitnessIndex + 1,
    // )
    console.log(state.fitnessResult)
    return {
      ...state,
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
