import noImg from '../../../static/img/No_image_available.svg'
import iconSrc from '../../../static/img/diary-camera-icon.svg'
import noSearchImgSrc from '../../../static/img/noSearchImg.svg'

//===========================> index.js

export const container = {
  width: '1200px',
  margin: '0 auto',
  position: 'relative',
}

export const resultWrapper = {
  width: '1200px',
  display: 'flex',
  position: 'relative',
}

// ==============================> ResultSearchBar.js

export const searchWrapper = {
  display: 'inlineBlock',
}

export const iconStyle = {
  position: 'absolute',
  top: '90px',
  right: '32px',
  cursor: 'pointer',
}

export const cameraIcon = iconSrc

// ===================================> ResultList.js

export const wrapper = {
  width: '1180px',
  position: 'absolute',
  top: '141px',
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
  color: '#54698d',
  marginLeft: '0.3rem',
  marginRight: '0',
  cursor: 'pointer',
  fontSize: '1.2rem',
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
  backgroundPositionY: '70%',
  backgroundImage: `url(${noImg})`,
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

// ===================================> NoSearch.js

export const noSearchContainer = {
/*  width: '1180px',
  height: '607px',
  position: 'absolute',
  top: '113px',
  left: '139px',
  */
}

export const noSearchText = {
  width: '267px',
  height: '62px',
  fontSize: '21px',
  fontWeight: '300',
  letterSpacing: '-1px',
  textAlign: 'center',
  color: '#54698d',
  position: 'absolute',
  top: '110px',
  left: '447.5px',
}

export const noSearchImage = {
  width: '180px',
  height: '179px',
  objectFit: 'contain',
  color: '#54698d',
  position: 'absolute',
  top: '216px',
  left: '491px',
}

export const noSearchSvgSrc = noSearchImgSrc
