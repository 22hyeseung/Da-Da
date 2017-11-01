import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import ResultSearchBar from './ResultSearchBar'
import {
  noSearchContainer,
  noSearchText,
  noSearchImage,
  noSearchSvgSrc,
} from './StyledResult'

class NoSearch extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Navigation />
        <ResultSearchBar />
        <div style={noSearchContainer}>
          <p style={noSearchText}>
            이런..찾으시는 레시피가 없나요? 다른 음식은 어떠세요?
          </p>
          <img
            style={noSearchImage}
            src={noSearchSvgSrc}
            alt="No Search..."
            aria-hidden="true"
          />
        </div>
      </div>
    )
  }
}

export default NoSearch
