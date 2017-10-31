import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//스타일링
import { Menu } from 'semantic-ui-react'
import {
  logoWrap,
  logo,
} from './StyledNavigation'

class Logo extends Component {
  render() {
    return (
      <Menu.Item style={logoWrap}>
        <Link
          to="/"
          style={{
            ...logo,
            color: this.props.color,
          }}
        >
          DA, DA
        </Link>
      </Menu.Item>
    )
  }
}

export default Logo
