import bgVideo from '../../static/video/bg_login_1m.mp4'
import bgImg from '../../static/img/login_img.jpg'
import foodTabImage from '../../static/img/1.0_home_BG1.jpg'
import fitnessTabImage from '../../static/img/1.0_home_BG2.jpg'
import reviewTabImage from '../../static/img/1.0_home_BG3.jpg'

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
