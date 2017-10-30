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
    const target = Object.values(
      action.payload,
    )[0]
    const updateFitnessIndex = state.fitnessResult
      .map(item => item.burn_id)
      .indexOf(target.burn_id)

    // console.log(updateFitnessIndex)

    state.fitnessResult.splice(
      updateFitnessIndex,
      1,
      target,
    )

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
