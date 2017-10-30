// 오늘 날짜
export const dateTime = new Date()
const day = dateTime.getDay()

export const setDay = day => {
  switch (day) {
    case 0:
      return '일'
    case 1:
      return '월'
    case 2:
      return '화'
    case 3:
      return '수'
    case 4:
      return '목'
    case 5:
      return '금'
    case 6:
      return '토'
    default:
      return console.log('예외 발생: ' + day)
  }
}

// 오늘 날짜 형식: YYYY. MM. DD.
export const todaysDate = dateTime.toLocaleDateString()

// 오늘 요일 형식: ex. '월'
export const todaysDay = setDay(day)

// 날짜 포맷 변환 함수 ===============================================

//-----------------------------------------------------------------
// 1. String -> String
//-----------------------------------------------------------------

// API 통신용 날짜 포맷
// YYYY. MM. DD. -> YYYYMMDD
export const dateStringForApiQuery = dateString => {
  return dateString
    .split('.')
    .join('')
    .replace(/ /gi, '')
}

// YYYY. MM. DD. -> YYYY-MM-DD
export const dateDotToDateDash = dateString => {
  return dateString
    .replace(/ /gi, '')
    .split('.')
    .join('-')
    .substr(0, 10)
}

// YYYY-MM-DD -> YYYY. MM. DD.
export const dateDashToDateDote = dateString => {
  return dateString.split('-').join('. ') + '. '
}

// YYYY-MM-DD -> YYYY년 MM월 DD일
export const dateDashToKR = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(5, 2)
  const dd = dateString.substr(8, 2)
  return `${yyyy}년 ${mm}월 ${dd}일`
}

//-----------------------------------------------------------------
// 2. String -> Date
//-----------------------------------------------------------------

// YYYY-MM-DD -> DATE
export const dateDashToDateType = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(5, 2)
  const dd = dateString.substr(8, 2)
  return new Date(yyyy, mm - 1, dd)
}

// YYYY. MM. DD. -> DATE
export const dateDotToDateType = dateString => {
  const yyyy = dateString.substr(0, 4)
  const mm = dateString.substr(6, 2) * 1
  const dd = dateString.substr(10, 2)
  return new Date(yyyy, mm - 1, dd)
}

// 날짜 계산하는 함수 ===================================================

// N일전 날짜(date타입) 구하는 함수
export const getDateNDaysBefore = (
  dateType,
  n,
) => {
  return new Date(
    dateType.getFullYear(),
    dateType.getMonth(),
    dateType.getDate() - n,
  )
}

// N일후 날짜(date타입) 구하는 함수
export const getDateNDaysAfter = (
  dateType,
  n,
) => {
  return new Date(
    dateType.getFullYear(),
    dateType.getMonth(),
    dateType.getDate() + n,
  )
}

// 시작일부터 일주일치 Array 반환
export const getWeekArray = dateTypeStartDate => {
  const dateArray = []
  for (let i = 0; i < 7; i++) {
    dateArray.push(
      new Date(
        dateTypeStartDate.getFullYear(),
        dateTypeStartDate.getMonth(),
        dateTypeStartDate.getDate() + i,
      ),
    )
  }
  return dateArray
}
