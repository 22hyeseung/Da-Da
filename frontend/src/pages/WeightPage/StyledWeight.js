import weightMeasure from '../../static/img/weight-img.svg'
import arrowDown from '../../static/img/weight-daily-arrowDown.svg'
import arrowUp from '../../static/img/weight-daily-arrowUp.svg'
import trash from '../../static/img/trash_icon.svg'
// progress flag
import weightFlag from '../../static/img/weight-flag.svg'
import startPoint from '../../static/img/Step-Active.svg'
import endPoint from '../../static/img/Step-Not_Completed.svg'

// 공통 style 시작
export const header = {
  fontSize: '28px',
  fontWeight: '300',
  fontFamily: "'NanumSquareRound', sans-serif",
  textAlign: 'left',
  color: '#16325C',
  marginBottom: '30px',
}

export const subHeader = {
  fontFamily: 'montserrat-bold',
  fontSize: '14px',
  textAlign: 'left',
  color: '#1f2e79',
}
// 공통 style 끝

export const weightAddBtn = {
  backgroundImage: ' linear-gradient(261deg, #485563, #29323c)',
  color: '#fff',
  fontWeight: '300',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'NanumSquareRound', sans-serif",
  padding: '9px',
}

export const listItem = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0px',
}

export const date = {
  fontSize: '12px',
  color: '#54698d',
}

export const weigthValue = {
  fontFamily: 'montserrat-semibold',
  fontSize: '24px',
  color: '#16325c',
}

export const weightUnit = {
  fontFamily: 'montserrat-reguler',
  fontSize: '16px',
  color: '#16325c',
}

export const icon = {
  arrowDown,
  arrowUp,
  trash,
  weightFlag,
  startPoint,
  endPoint,
}

export const img = {
  weightMeasure,
}
