import foodImg from '../../../static/img/diary_food_album.jpg'
import foodBG from '../../../static/img/food_bg.png'

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
  padding: '0px 14px',
  display: 'flex',
}

export const modalUpload = {
  boxShadow: 'none',
  border: '1px dashed #A8B7C7',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px',
  width: '50%',
  padding: '7px',
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
  textAlign: 'center',
  marginTop: '7px',
  paddingBottom: '14px',
  borderBottom: '1px solid #e0e1e2',
}
export const modalThirdGridBox = {
  margin: '0px 0px 0px 14px',
  width: '50%',
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
  padding: '0px',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '5px',
}
// 등록 후 카드리스트 끝

// 오늘의 식단앨범 시작
export const albumCard = {
  boxShadow: 'none',
  margin: '0px 14px 0px 0px',
  border: '1px solid #d8dde6',
  width: '210px',
  height: '210px',
  backgroundPositionX: '50%',
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

export const searchResultList = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 7px 7px 7px',
  borderBottom: '1px solid #d8dde6',
  margin: '0px',
  borderRadius: '0px',
  cursor: 'pointer',
}

export const searchDefaultMsg = {
  color: '#a8b7c7',
  fontWeight: '100',
  marginTop: '10px',
}

export const searchDefault = {
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
}

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
