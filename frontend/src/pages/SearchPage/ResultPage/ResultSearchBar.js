import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'

const searchWrapper = {
  display: 'inlineBlock',
  position: 'absolute',
  top: '72px',
  left: '139px',
}

const resultSearch = {
  width: '1124px',
  height: '41px',
}

const iconStyle = {
  width: '26px',
  height: '22px',
  color: '#1a2980',
  marginLeft: '21px',
}

export default class ResultSearchBar extends Component {
  render() {
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
}
