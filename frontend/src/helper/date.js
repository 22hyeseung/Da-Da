// 오늘 날짜
const dateTime = new Date()
export const date = dateTime.toLocaleDateString()

export const setDay = () => {
  const day = dateTime.getDay() // 요일 (0~6)
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
  }
}
