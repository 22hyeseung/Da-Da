const DEFAULT_DIARY_FITNESS = {
  fitnessResult: [],
  isPending: false,
  errorState: false,
}

export const diaryFitnessReducer = (
  state = DEFAULT_DIARY_FITNESS,
  action,
) => {
  // =============== Get fitness logs ================ //
  if (
    action.type === 'GET_FITNESS_LOGS_REQUEST'
  ) {
    return {
      isPending: true,
    }
  }
  if (
    action.type === 'GET_FITNESS_LOGS_SUCCESS'
  ) {
    return {
      ...state,
      fitnessResult: [
        ...action.payload,
      ].reverse(),
      isPending: false,
    }
  }
  if (action.type === 'GET_FITNESS_LOGS_FAILED') {
    return {
      isPending: false,
      errorState: true,
    }
  }

  // =============== Post fitness data ================ //
  if (
    action.type ===
    'POST_FITNESS_TO_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }
  if (
    action.type ===
    'POST_FITNESS_TO_DATABASE_SUCCESS'
  ) {
    return {
      fitnessResult: [
        ...action.payload,
        ...state.fitnessResult,
      ],
      isPending: false,
    }
  }
  if (
    action.type ===
    'POST_FITNESS_TO_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Update fitness data ================ //
  if (
    action.type ===
    'UPDATE_FITNESS_OF_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: true,
    }
  }

  if (
    action.type ===
    'UPDATE_FITNESS_OF_DATABASE_SUCCESS'
  ) {
    const target = Object.values(
      action.payload,
    )[0]
    const updateFitnessIndex = state.fitnessResult
      .map(item => item.burn_id)
      .indexOf(target.burn_id)

    state.fitnessResult.splice(
      updateFitnessIndex,
      1,
      target,
    )

    return {
      ...state,
      isPending: false,
    }
  }

  if (
    action.type ===
    'UPDATE_FITNESS_OF_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  // =============== Delete fitness data ================ //
  if (
    action.type ===
    'DELETE_FITNESS_OF_DATABASE_REQUEST'
  ) {
    return {
      ...state,
      isPending: false,
    }
  }

  if (
    action.type ===
    'DELETE_FITNESS_OF_DATABASE_SUCCESS'
  ) {
    const deleteFitnessResult = state.fitnessResult.filter(
      item => item.burn_id !== action.payload,
    )
    return {
      fitnessResult: [...deleteFitnessResult],
      isPending: false,
    }
  }

  if (
    action.type ===
    'DELETE_FITNESS_OF_DATABASE_FAILED'
  ) {
    return {
      ...state,
      isPending: false,
      errorState: true,
    }
  }

  return {
    ...state,
  }
}
