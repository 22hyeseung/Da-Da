// 오늘 날짜
const dateTime = new Date()
const day = dateTime.getDay()

const setDay = day => {
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

// API 통신용 date형식: YYYYMMDD
export const dateStringForApiQuery = todaysDate
  .split('.')
  .join('')
  .replace(/ /gi, '')
