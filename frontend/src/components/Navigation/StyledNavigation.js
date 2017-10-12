import React from 'react'

// ===============================  index.js
// 전체 컨테이너
export const container = {
  border: 'none',
}

// ===============================  Logo.js

// 홈페이지 로고
export const logo = {
  fontSize: '25px',
  // color: '#16325c',
  textTransform: 'uppercase',
  fontFamily: '"montserrat-bold", sans-serif',
  paddingLeft: '0',
}

// =============================== RightMenu

// 네비게이션 아이템 전체 래퍼
export const itemWrap = {
  display: 'flex',
  width: '618px',
}

// =============================== RightMenu > NavItem.js

// 네비게이션 개별 아이템(a태그) 래퍼
export const linkTagWrap = {
  padding: '0px 9.5px 15px',
  marginLeft: '37px',
}

// 네비게이션 개별 아이템(a태그)
export const linkTag = {
  color: '#16325c',
  fontSize: '14px',
  letterSpacing: '-0.7px',
}

// =============================== RightMenu > UseInfo.js

// 유저 정보 전체(사진+이름) 래퍼
export const userInfoWrap = {
  ...linkTagWrap,
  fontSize: '14px',
  color: '#16325c',
  fontWeight: '700',
}

// 유저 프로필 사진
export const avatar = {
  width: '34px',
  height: '34px',
  marginRight: '18px',
}

// =============================== RightMenu > UseInfo.js > UserInfoPopup.js

// 팝업창 전체 래퍼
export const PopWrap = {
  textAlign: 'center',
  color: '#16325c',
  width: '220px',
  height: '280px',
}

// 첫번째 Row = 유저 사진, 이름, 신체(키/몸무게) 정보
export const row_1 = {
  height: '85px',
  paddingBottom: '0',
}

// 첫번째 row 첫번째 col
export const row_1_col_1 = {
  padding: '0',
  marginLeft: '21px',
  width: '80px',
}

// 팝업창에서의 사용자 이미지
export const avatar_pop = {
  ...avatar,
  width: '69px',
  height: '69px',
}

// 첫번째 row 두번째 col
export const row_1_col_2 = {
  padding: '10px 0 0 0',
  width: '102px',
}

// 팝업창에서의 사용자 이름
export const username_pop = {
  fontSize: '21px',
  fontWeight: '700',
  textAlign: 'left',
  margin: '0',
  paddingLeft: '7px',
}

// 사용자 신체 정보
export const userSize = {
  fontFamily: 'Montserrat-medium',
  fontSize: '12px',
  width: '102px',
  height: '27px',
  lineHeight: '27px',
  color: '#fff',
  borderRadius: '21px',
  backgroundImage:
    'linear-gradient(255deg, #26d0ce, #1a2980)',
}

// 두번째 Row = D+day, 목표 체중 정보
export const row_2 = {
  padding: '0',
  height: '115px',
}

export const row_2_segment = {
  marginLeft: '21px',
  height: '114px',
}

export const d_day = {
  fontSize: '14px',
  fontWeight: '700',
}

export const goalWrap = {
  width: '150px',
  height: '55px',
  lineHeight: '27.5px',
  borderRadius: '4px',
  border: 'solid 1px #d8dde6',
}

export const goalWeight = { fontWeight: '700' }

// 세번째 Row = 로그아웃 버튼
export const row_3 = {
  height: '40px',
  marginLeft: '108px',
  padding: '0',
}

export const logout = { height: '36px' }
