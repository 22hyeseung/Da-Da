import cardBgImg from '../../static/img/recipe_box_img.png'
import bgImg from '../../static/img/recipe_img.jpg'

// =====================================> index

// 레피시 페이지 전체 컨테이너
export const container = {
  minWidth: '1200px',
  height: '100%',
}

// 레시피 페이지 상단 컨테이너
export const topContainer = {
  minHeight: '464px',
  backgroundImage: `url(${bgImg})`,
  backgroundSize: '1550px',
  backgroundPosition: 'left center',
  position: 'relative',
}

// 레시피 페이지 네비게이션 배경
export const navigationBackground = {
  minWidth: '1200px',
  backgroundColor: 'red',
  opacity: '0.7',
  backgroundImage:
    'linear-gradient(268deg, #485563, #29323c)',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
}

export const bottomContainer = {
  width: '1200px',
  position: 'relative',
  marginTop: '28px',
  marginLeft: '63px',
}

export const recipeSummaryWrap = {
  position: 'absolute',
  left: '130px',
  bottom: '41px',
}

export const recipeSummary = {
  width: '480px',
  height: '325px',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 0 13px 0 rgba(79, 64, 64, 0.2)',
}

export const ribbonLabel = {
  width: '202px',
  height: '37px',
  borderRadius: '0 33px 33px 0',
  backgroundImage:
    'linear-gradient(260deg, #485563, #29323c)',
  fontSize: '14px',
  fontWeight: '300',
  lineHeight: '20px',
}

export const recipeTitle = {
  position: 'absolute',
  top: '74px',
  left: '27px',
  fontSize: '42px',
  fontWeight: '200',
  lineHeight: '1.1',
}

export const nutritionTable = {
  width: '180px',
  position: 'absolute',
  bottom: '37px',
  right: '20px',
  fontSize: '14px',
}

export const factsData = {
  fontFamily: 'Montserrat-Bold',
  fontWeight: '700',
}

export const unitData = {
  fontSize: '21px',
  padding: '7px 0',
}

// =====================================> ingredient box

// 재료 카드 전체 래퍼
export const cardWrap = {
  backgroundImage: `url(${cardBgImg})`,
  backgroundSize: '100% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
}

// 재료 카드 헤더 ()
export const cardHeader = {
  fontSize: '14px',
  color: '#54698d',
  marginLeft: '12px',
}

export const ingredientListWrap = {
  textAlign: 'center',
  marginBottom: '90px',
}

export const ingredientNameList = {
  display: 'inline-block',
  textAlign: 'left',
  color: '#16325c',
  fontWeight: '300',
  width: '140px',
}

export const ingredientAmountList = {
  display: 'inline-block',
  lineHeight: '1.79',
  fontWeight: '700',
  textAlign: 'right',
  color: '#16325c',
  width: '75px',
}

// =====================================> cooking process

export const checkboxStyle = {
  display: 'inline-block',
  marginRight: '24px',
  marginBottom: '48px',
  paddingTop: '3px',
  color: '#54698d',
  fontSize: '20px',
  lineHeight: '40px',
  textAlign: 'center',
  width: '52px',
  height: '52px',
  border: '3px solid #54698d',
  cursor: 'pointer',
  borderRadius: '50%',
  transition: 'border 1s ease-in',
}

export const description = {
  display: 'inline-flex',
  fontSize: '18px',
  lineHeight: '32px',
  letterSpacing: '-0.2px',
  color: '#54698d',
  width: '700px',
}

export const btnDiarySubmit = {
  margin: '37px',
  boxShadow: '4px 4px 4px #888888',
  border: 'none',
  fontWeight: '100',
  color: '#fff',
  backgroundImage:
    'linear-gradient(216deg, #26d0ce, #1a2980)',
}
