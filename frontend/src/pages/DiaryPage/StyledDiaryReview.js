import reviewBG from '../../static/img/review_bg.png'

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
  marginBottom: '0px',
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

// review tab view 컴포넌트 시작
export const reviewBox = {
  padding: '33px 36px 21px 36px',
  boxShadow: 'none',
  border: '1px solid #D8DDE6',
  backgroundImage: `url(${reviewBG})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  backgroundSize: '34%',
}

// 오늘의 반성일기 시작
export const shortBox = {
  marginLeft: '-12px',
  paddingTop: '18px',
}

export const shortInput = {
  width: '722px',
  height: '37px',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  border: 'solid 1px #d8dde6',
}

export const shortSubmitBtn = {
  ...submitBtn,
  marginLeft: '8px',
  height: '36px',
}
// 오늘의 반성일기 끝
