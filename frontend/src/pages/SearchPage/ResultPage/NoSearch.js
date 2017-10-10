import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import ResultSearchBar from './ResultSearchBar'
import svgImg from '../../../static/img/noSearchImg.svg'

const container = {
  width: '1180px',
  height: '607px',
  position: 'absolute',
  top: '113px',
  left: '139px',
}

const text = {
  width: '267px',
  height: '62px',
  fontSize: '21px',
  fontWeight: '300',
  letterSpacing: '-1px',
  textAlign: 'center',
  color: '#54698d',
  position: 'absolute',
  top: '110px',
  left: '447.5px',
}

const image = {
  width: '180px',
  height: '179px',
  objectFit: 'contain',
  color: '#54698d',
  position: 'absolute',
  top: '216px',
  left: '491px',
}

class NoSearch extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Navigation />
        <ResultSearchBar />
        <div style={container}>
          <p style={text}>
            이런..찾으시는 레시피가 없나요? 다른 음식은 어떠세요?
          </p>
          <img
            style={image}
            src={svgImg}
            alt="No Search..."
          />
        </div>
      </div>
    )
  }
}

export default NoSearch
