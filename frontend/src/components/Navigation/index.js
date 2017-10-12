import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {
  Router,
  withRouter,
} from 'react-router-dom'
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

// default Props: 컬러 반전이 없는 일반 페이지의 default color
Navigation.defaultProps = {
  color: '#16325c',
  inverted: false,
}

export default Navigation
