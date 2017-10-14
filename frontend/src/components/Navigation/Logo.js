import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { logo } from './StyledNavigation'

class Logo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu.Item
        style={{
          ...logo,
          color: this.props.color,
        }}
      >
        DA, DA
      </Menu.Item>
    )
  }
}

export default Logo
