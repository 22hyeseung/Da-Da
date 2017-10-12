import React, { Component } from 'react'
import { Input, Search } from 'semantic-ui-react'
import {
  searchWrapper,
  cameraIcon,
  iconStyle,
} from './StyledResult'

const ResultSearchBar = () => {
  return (
    <div style={searchWrapper}>
      <Search className="search-result-searchbar" />
      <img
        src={cameraIcon}
        style={iconStyle}
        /* onClick={this.show('blurring')} */
        alt="이미지를 업로드하여 식단을 검색"
      />
    </div>
  )
}

export default ResultSearchBar
