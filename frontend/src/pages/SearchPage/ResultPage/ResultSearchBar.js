import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import {
  searchWrapper,
  resultSearch,
  iconStyle,
} from './StyledResult'

const ResultSearchBar = () => {
  return (
    <div style={searchWrapper}>
      <Input
        style={resultSearch}
        icon="search"
        placeholder="Search..."
      />
      <Icon
        name="photo"
        size="large"
        style={iconStyle}
      />
    </div>
  )
}

export default ResultSearchBar
