import React from 'react'
import img1 from '../../../static/img/result1.png'

//===========================> index.js

export const resultWrapper = {
  width: '1200px',
  display: 'flex',
  position: 'relative',
}

// ==============================> ResultSearchBar.js

export const searchWrapper = {
  display: 'inlineBlock',
  position: 'absolute',
  top: '72px',
  left: '139px',
}

export const resultSearch = {
  width: '1124px',
  height: '41px',
}

export const iconStyle = {
  width: '26px',
  height: '22px',
  color: '#1a2980',
  marginLeft: '21px',
}

// ===================================> ResultList.js

export const wrapper = {
  width: '1180px',
  position: 'absolute',
  top: '141px',
  left: '131px',
  verticalAlign: 'middle',
}

export const message = {
  width: '128px',
  height: '20px',
  fontSize: '14px',
  fontWeight: '300',
  textAlign: 'left',
  color: '#54698d',
}

export const icon = {
  width: '13.5px',
  height: '13.5px',
  color: '#54698d',
  marginRight: '12.3px',
}

export const messagewrap = {
  height: '28px',
  padding: '0',
  position: 'absolute',
  top: '15px',
  left: '14px',
  lineHeight: '28px',
}

export const ImageWrap = {
  position: 'absolute',
  top: '54px',
  left: '14px',
  padding: '0',
}

export const ResultImage = {
  width: '279px',
  height: '271px',
  borderRadius: '4px',
  backgroundSize: '100% 150%',
  backgroundImage: `url(${img1})`,
  backgroundPositionY: '70%',
}

export const CardLabel = {
  width: '279px',
  height: '83px',
  position: 'absolute',
  top: '188px',
  fontWeight: '100',
  fontSize: '14px',
  opacity: '0.7',
  borderRadius: '4px',
  backgroundImage:
    'linear-gradient(253deg, #485563, #29323c)',
}

export const CardLabelHeader = {
  color: '#fff',
  fontWeight: '100',
  position: 'absolute',
  top: '13.5px',
  left: '18px',
  fontSize: '21px',
}

export const CardLabelLeftText = {
  color: '#fff',
  position: 'absolute',
  top: '48px',
  left: '18px',
}

export const CardLabelRightText = {
  color: '#fff',
  position: 'absolute',
  bottom: '15px',
  right: '17px',
}

export const dataText = {
  fontFamily: 'Montserrat-Regular',
  fontSize: '21px',
}

export const CardSize = {
  width: '279px',
  height: '271px',
  borderRadius: '4px',
}
