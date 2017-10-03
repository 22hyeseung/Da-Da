import React, { Component } from 'react'
import bgImg from '../../static/img/search_bg.jpg'

export const container = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  color: '#fff',
  height: '780px',
}

export const centerGrid = {
  textAlign: 'center',
  position: 'relative',
}

export const h1 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '56px',
  margin: '0',
  position: 'absolute',
  top: '195px',
  left: '40px',
}

export const h2 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '28px',
  margin: '0',
  position: 'absolute',
  top: '270px',
  left: '160px',
}

export const h5 = {
  fontFamily: 'Spoqa Han Sans',
  fontWeight: '100',
  fontSize: '14px',
  margin: '0',
  position: 'absolute',
  top: '410px',
  left: '125px',
}

export const searchInput = {
  width: '581px',
  position: 'absolute',
  top: '340px',
  left: '10px',
}
