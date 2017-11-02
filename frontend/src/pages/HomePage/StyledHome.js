import bgVideo from '../../static/video/bg_login_1m.mp4'
import bgImg from '../../static/img/login_img.jpg'
import foodTabImage from '../../static/img/1.0_home_BG1.jpg'
import fitnessTabImage from '../../static/img/1.0_home_BG2.jpg'
import reviewTabImage from '../../static/img/1.0_home_BG3.jpg'

export const introTitle = {
  fontSize: '35px',
  lineHeight: '45px',
  marginBottom: '35px',
}

export const button = {
  width: '190px',
  borderRadius: '18px',
  marginTop: '42px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255,.5)',
  color: '#fff',
  fontWeight: '100',
}
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

export const background = {
  video: bgVideo,
  poster: bgImg,
}

export const tabContainer = {
  position: 'fixed',
  height: '100%',
  display: 'flex',
  width: '100%',
}

export const tabStyle = {
  backgroundSize: 'cover',
  height: '100%',
}

export const tabImage = {
  FOOD: foodTabImage,
  FITNESS: fitnessTabImage,
  REVIEW: reviewTabImage,
}

export const list = {
  padding: '14px 7px',
  borderBottom: '1px solid rgb(224, 229, 238)',
  display: 'flex',
  justifyContent: 'space-between',
}

export const listLabel = {
  color: '#a8b7c7',
  width: '100px',
  display: 'inline-block',
}

export const lastMsg = {
  fontSize: '14px',
  marginTop: '28px',
  fontWeight: '200',
  padding: '0px 14px 14px 14px',
  lineHeight: '2px',
  backgroundColor: 'lemonchiffon',
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

export const cancleBtn = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  padding: '10px 34px',
}

export const modalDescription = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '14px',
}

export const modalAvatar = {
  display: 'block',
  width: '70px',
  height: '70px',
  margin: '0px auto 14px',
}

export const fakeSubmitBtn = {
  color: 'white',
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  padding: '10px 34px',
  backgroundImage:
    'linear-gradient(250deg, #26d0ce, #1a2980)',
  marginRight: '0px',
  boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
}

export const form = {
  display: 'flex',
  width: '30%',
  justifyContent: 'space-between',
}
