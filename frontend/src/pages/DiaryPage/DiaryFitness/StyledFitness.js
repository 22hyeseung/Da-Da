import bgImg from '../../../static/img/fitness_bg.png'

// ==========================> index.js
export const container = {
  // height: '574px',
  overflow: 'auto',
  padding: '33px 36px 14px',
  boxShadow: 'none',
  border: '1px solid #D8DDE6',
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  backgroundSize: '34%',
  backgroundAttachment: 'local',
}

export const icon = {
  height: '27px',
  marginBottom: '9px',
}

// ==========================> DiaryFitnessList.js

export const listWrap = {
  display: 'flex',
  justifyContent: 'space-between',
}

export const listItemLeft = {
  width: '6%',
  margin: '0',
}

export const listItemRight = {
  width: '30%',
  margin: '0',
  textAlign: 'right',
}

export const textSmall = {
  fontSize: '12px',
}

export const text = {
  fontSize: '17px',
  letterSpacing: '-0.3px',
  color: '#16325c',
}

export const textBig = {
  fontSize: '28px',
  letterSpacing: '-1px',
  color: '#16325c',
  fontFamily: 'Montserrat-Bold',
  marginRight: '7px',
}

export const buttonIcon = {
  padding: '3px',
  color: '#a8b7c7',
  backgroundColor: 'transparent',
  display: 'inline-block',
  width: '46%',
}

// ==========================> DiaryFitnessInput.js

export const listItemLeftWrap = {
  width: '100%',
  margin: '0',
}

export const listItemRightWrap = {
  width: '30%',
  margin: '0',
}

export const inputStyle = {
  width: '100%',
}

export const tiemsIcon = {
  marginLeft: '15px',
  color: '#a8b7c7',
}

export const equalIcon = {
  marginLeft: '15px',
  color: '#a8b7c7',
}

export const listItemRightAlign = {
  textAlign: 'right',
  width: '10%',
  margin: '0',
}

export const textSmall_Input = {
  ...textSmall,
  letterSpacing: '-0.3px',
  color: '#16325c',
}

export const buttonWrap = {
  display: 'flex',
  justifyContent: 'flex-end',
}

export const button = {
  width: '93px',
  fontWeight: '300',
}

export const submitButton = {
  width: '93px',
  fontWeight: '300',
  color: '#fff',
  backgroundImage:
    'linear-gradient(249deg, #485563, #29323c)',
  marginLeft: '7px',
}

// ==========================> DiaryFitnessAdd.js

export const addButton = {
  textAlign: 'left',
  padding: '8px 14px',
  color: '#16325C',
  backgroundColor: 'transparent',
  fontWeight: '200',
  display: 'flex',
  alignItems: 'center',
  border: '1px dashed #A8B7C7',
  borderRadius: '4px',
}

export const addIcon = { marginRight: '10px' }

// ==========================> DiaryFitnessSearch.js
export const errorIcon = {
  width: '6%',
  filter: 'grayscale(100%)',
}

export const noResultMsg = {
  color: '#a8b7c7',
  fontWeight: '100',
  display: 'block',
}

export const noResult = {
  display: 'flex',
  height: '169px',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  alignItems: 'center',
}

export const noResultWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export const resultSmallMsg = {
  width: '100%',
  fontSize: '12px',
  padding: '7px 0px',
  display: 'flex',
  justifyContent: 'flex-end',
  color: '#a8b7c7',
}

export const searchResult = {
  width: '100%',
  display: 'inline-block',
  padding: '7px 0px',
  color: '#54698d',
  marginBottom: '7px',
}

export const searchResultWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px dashed #a8b7c7',
}

export const searchDefaultMsg = {
  color: '#a8b7c7',
  fontWeight: '100',
  marginTop: '10px',
}

export const searchDefault = {
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}
