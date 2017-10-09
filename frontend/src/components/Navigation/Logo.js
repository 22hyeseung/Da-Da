import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import * as styled from './StyledNavigation'

const Logo = () => {
  return (
    <Menu.Item style={styled.logo}>
      DA, DA
    </Menu.Item>
  )
}

export default Logo
