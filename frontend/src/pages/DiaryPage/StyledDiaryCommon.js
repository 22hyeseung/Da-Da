import editIcon from '../../static/img/diary-review_w.svg'
import fitnessIconDefault from '../../static/img/diary-fitness_default.svg'
import fitnessIconWhite from '../../static/img/diary-fitness_w.svg'
import foodIconDefault from '../../static/img/diary-food_default.svg'
import foodIconWhite from '../../static/img/diary-food_w.svg'
import reviewIconDefault from '../../static/img/diary-review_default.svg'
import reviewIconWhite from '../../static/img/diary-review_w.svg'

// 공통 스타일 시작
export const header = {
  fontSize: '28px',
  fontWeight: '100',
  color: '#16325C',
  marginBottom: '42px',
  fontFamily: 'Spoqa Han Sans',
}

export const subHeader = {
  fontFamily: 'montserrat-bold',
  fontSize: '14px',
  color: '#1f2e79',
}

export const segmentDefault = {
  boxShadow: 'none',
  marginTop: '0px',
  border: '1px solid #d8dde6',
  marginBottom: '14px',
}

export const cancelBtn = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  padding: '10px 34px',
}

export const submitBtn = {
  color: 'white',
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  padding: '10px 34px',
  backgroundImage:
    'linear-gradient(249deg, #485563, #29323c)',
  marginRight: '0px',
}
// 공통 스타일 끝

export const calorieGoal = {
  minWidth: '190px',
  position: 'absolute',
  top: '64px',
  right: '0px',
  padding: '7px 14px',
  margin: '0px',
  boxShadow: 'none',
  border: 'none',
  fontWeight: '100',
  color: '#fff',
  backgroundImage:
    'linear-gradient(216deg, #26d0ce, #1a2980)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const defaultTabStyle = {
  justifyContent: 'flex-start',
}

export const activeTabStyle = {
  ...defaultTabStyle,
  backgroundImage:
    'linear-gradient(263deg, #485563, #29323c)',
}

export const defaultFontStyle = {
  fontWeight: '100',
  color: '#16325c',
}

export const activeFontStyle = {
  ...defaultFontStyle,
  color: '#fff',
}

export const kcalInput = {
  marginLeft: '10px',
  width: '55px',
  height: '28px',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #d8dde6',
}

export const iconSet = {
  editIcon,
  foodIcon: {
    default: foodIconDefault,
    white: foodIconWhite,
  },
  fitnessIcon: {
    default: fitnessIconDefault,
    white: fitnessIconWhite,
  },
  reviewIcon: {
    default: reviewIconDefault,
    white: reviewIconWhite,
  },
}
