import * as types from '../actions/ActionTypes'

export const setTodayDate = date => ({
  type: types.SET_TODAY_DATE,
  payload: date,
})

export const setTodayDay = day => ({
  type: types.SET_TODAY_DAY,
  payload: day,
})

export const setBeforeDate = date => ({
  type: types.SET_BEFORE_DATE,
  payload: date,
})

export const setBeforeDay = day => ({
  type: types.SET_BEFORE_DAY,
  payload: day,
})

export const moveToPrevDate = targetDate => ({
  type: types.MOVE_PREVIOUS_DATE,
  payload: targetDate,
})

export const moveToNextDate = targetDate => ({
  type: types.MOVE_NEXT_DATE,
  payload: targetDate,
})

// export const moveToNextDate = targetDate => {
//   const nextDate = getDateNDaysAfter(
//     dateDotToDateType(targetDate),
//     1,
//   )

//   this.setState({
//     date: nextDate.toLocaleDateString(),
//     day: setDay(nextDate.getDay()),
//   })

//   console.log('다음날로가기')
//   console.log(nextDate)
//   console.log(this.state.date)
//   console.log(this.state.day)
// }
