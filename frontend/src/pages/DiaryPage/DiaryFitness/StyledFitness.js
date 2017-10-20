import bgImg from '../../../static/img/fitness_bg.png'

// ==========================> index.js
export const container = {
  height: '574px',
  overflow: 'auto',
  padding: '33px 36px',
  boxShadow: 'none',
  border: '1px solid #D8DDE6',
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundSize: '34%',
  backgroundAttachment: 'local',
}

export const icon = {
  height: '27px',
  marginBottom: '9px',
}

// ==========================> DiaryFitnessList.js

export const listWrap = { width: '95%' }

export const listItemLeft = {
  width: '20%',
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
}

export const buttonIcon = {
  padding: '3px',
  color: '#a8b7c7',
  backgroundColor: 'transparent',
  display: 'inline-block',
}

// ==========================> DiaryFitnessInput.js

export const listItemLeftWrap = {
  width: '60%',
  margin: '0',
}

export const listItemRightWrap = {
  width: '30%',
  margin: '0',
}

export const inputStyle = {
  width: '90%',
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
  float: 'right',
  marginTop: '40px',
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
}

export const addIcon = { marginRight: '10px' }
