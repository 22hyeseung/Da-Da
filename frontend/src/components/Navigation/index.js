import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { container } from './StyledNavigation'
import Logo from './Logo'
import RightMenu from './RightMenu'

class Navigation extends Component {
  render() {
    return (
      // 네비게이션 시작
      <Menu style={container} pointing secondary>
        {/* 왼쪽: 로고 */}
        <Logo color={this.props.color} />

        {/* 오른쪽: 네비게이션 아이템*/}
        <RightMenu
          inverted={this.props.inverted}
          color={this.props.color}
        />
      </Menu>
    )
  }
}

Navigation.defaultProps = {
  inverted: false,
  opacity: '0',
  color: '#16325',
  backgroundImage: 'transparent',
}

export default Navigation
