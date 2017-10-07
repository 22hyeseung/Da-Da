import React from 'react'

// 네비게이션 컨테이너
export const container = {
  border: 'none',
  height: '56px',
}

// 홈페이지 로고
export const logo = {
  height: '30px',
  fontSize: '25px',
  color: '#16325c',
  textTransform: 'uppercase',
  fontFamily: '"montserrat-bold", sans-serif',
}

export const itemWrap = {
  display: 'flex',
  width: '618px',
}

// 네비게이션 아이템(a태그) 래퍼
export const linkTagWrap = {
  height: '29px',
  padding: '0px 9.5px 15px',
  marginLeft: '37px',
}

// 네비게이션 아이템(a태그)
export const linkTag = {
  height: '20px',
  color: '#16325c',
  fontSize: '14px',
  letterSpacing: '-0.7px',
}

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
