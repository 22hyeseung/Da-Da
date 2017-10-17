import foodImg from '../../../static/img/diary_food_album.jpg'
import foodBG from '../../../static/img/food_bg.png'

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

// food tab view 컴포넌트 시작
export const foodBox = {
  padding: '33px 36px 21px 36px',
  boxShadow: 'none',
  border: '1px solid #D8DDE6',
  backgroundImage: `url(${foodBG})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  backgroundSize: '34%',
}

export const currentKcal = {
  height: '25px',
  borderRadius: '43px',
  padding: '4px 26px',
  fontWeight: '100',
  fontSize: '14px',
  lineHeight: 'inherit',
  backgroundColor: 'rgba(245,244,240,0.86)',
  color: '#16325c',
}

export const addBtn = {
  textAlign: 'left',
  padding: '8px 14px',
  color: '#16325C',
  backgroundColor: 'white',
  border: '1px dashed #A8B7C7',
  borderRadius: '4px',
  fontWeight: '200',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Spoqa Han Sans',
}

// food tab view 컴포넌트 끝

// add버튼 click 이후 컴포넌트 시작
export const searchLabel = {
  backgroundColor: 'white',
  borderTop: '1px solid #D8DDE6',
  fontFamily: 'Spoqa Han Sans',
}

export const modalGrid = {
  paddingLeft: '0px',
  paddingRight: '21px',
}
export const modalUpload = {
  boxShadow: 'none',
  border: '1px dashed #A8B7C7',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

export const modalPhotoView = {
  boxShadow: 'none',
  height: '100%',
  background: `url(${foodImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  border: 'none',
}

export const modalPhotoSecondGrid = {
  width: '33%',
  marginRight: '7px',
}

export const modalThirdGrid = {
  width: '33%',
  height: '100%',
}

export const modalThirdGridHeader = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
}
export const modalThirdGridBox = {
  height: '288px',
  marginBottom: '0px',
}
// add버튼 click 이후 컴포넌트 끝

// 등록 후 카드리스트 시작
export const mealCard = {
  boxShadow: 'none',
  margin: '0px 14px 0px 0px',
  border: '1px solid #d8dde6',
  width: '210px',
}

export const settingIconWrapper = {
  margin: '0px 0px 0px 6px',
  color: '#A8B7C7',
  cursor: 'pointer',
}

export const settingIcon = {
  padding: '9px',
  backgroundColor: '#fff',
}
// 등록 후 카드리스트 끝

// 오늘의 식단앨범 시작
export const albumCard = {
  boxShadow: 'none',
  margin: '0px 14px 0px 0px',
  border: '1px solid #d8dde6',
  width: '210px',
  height: '210px',
  background: `url(${foodImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

export const albumLabel = {
  backgroundColor: 'rgba(22, 50, 92, 0.7)',
  color: '#fff',
  fontWeight: '100',
}

export const albumCardLabelTop = {
  fontSize: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const albumCardLabelBtoom = {
  padding: '16px',
  fontSize: '18px',
}
// 오늘의 식단앨범 끝
