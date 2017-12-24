import bgImg from '../../static/img/search_bg.jpg'

// ========================> index.js
export const container = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  color: '#fff',
  position: 'fixed',
  top: '0',
  left: '0',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
}

export const navGrid = {
  width: '1200px',
  margin: '0 auto',
  position: 'relative',
}

// ==========================> SearchBar.js

export const centerGrid = {
  textAlign: 'center',
  position: 'relative',
  marginTop: '12%',
  marginBottom: '25%',
}

export const h1 = {
  fontFamily: "'NanumSquareRound', sans-serif",
  fontWeight: '300',
  fontSize: '28px',
  lineHeight: '56px',
  margin: '0',
}

export const h2 = {
  fontFamily: "'NanumSquareRound', sans-serif",
  fontWeight: '400',
  fontSize: '56px',
  margin: '0',
  // letterSpacing: '1.6px',
}

export const headerGrid = {
  textAlign: 'center',
}

export const h5 = {
  fontFamily: "'NanumSquareRound', sans-serif",
  fontWeight: '300',
  fontSize: '14px',
  margin: 'auto',
  lineHeight: '50px',
}
