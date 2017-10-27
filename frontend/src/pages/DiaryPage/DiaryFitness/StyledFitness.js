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
  backgroundPositionX: '98%',
  backgroundSize: '34%',
  backgroundAttachment: 'local',
}

export const icon = {
  height: '27px',
  marginBottom: '9px',
}

export const modalName = {
  textAlign: 'center',
  fontWeight: '100',
  fontSize: '21px',
  borderBottom: '1px solid #e0e5ee',
  padding: '0px 0px 14px',
}

export const modalTime = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export const modalTimeInfo = {
  color: '#54698d',
  fontSize: '12px',
  marginTop: '21px',
  marginBottom: '12px',
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

export const listItemWrap = {
  width: '55%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const listItemResult = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '23%',
  alignItems: 'center',
}

export const textSmall = {
  fontSize: '12px',
}

export const text = {
  fontSize: '14px',
  letterSpacing: '-0.3px',
  color: '#16325c',
}

export const listItemTime = {
  fontFamily: 'Spoqa Han Sans',
  letterSpacing: '-.3px',
  color: '#16325c',
  fontWeight: '400',
  textAlign: 'right',
  width: '42px',
}

export const listItemKcal = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
}

export const textBig = {
  fontSize: '28px',
  letterSpacing: '-1px',
  color: '#16325c',
  fontFamily: 'Montserrat-Bold',
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
  display: 'flex',
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
