import React, { Component } from 'react'
import {
  Menu,
  Image,
  Popup,
  Button,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'
import Router from './Router'

class Navigation extends Component {
  render() {
    return (
      // 네비게이션 시작
      <Menu
        style={styled.container}
        inverted={this.props.inverted}
        pointing
        secondary
      >
        {/* 왼쪽: 로고 */}
        <Menu.Item style={styled.logo}>
          DA, DA
        </Menu.Item>

        {/* 오른쪽: 네비게이션 아이템*/}
        <Menu.Menu
          position="right"
          style={styled.itemWrap}
        >
          <Router />

          {/* 오른쪽 끝: 유저 정보 + 팝업*/}
          <Menu.Item style={styled.userInfoWrap}>
            <Image
              style={styled.avatar}
              shape="circular"
              src="https://placeimg.com/34/34/people"
            />
            <Popup
              wide
              trigger={
                <Button
                  inverted={this.props.inverted}
                  content="홍길동"
                />
              }
              on="click"
            >
              <UserInfoPopup />
            </Popup>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

Navigation.defaultProps = {
  inverted: false,
  opacity: '0',
  backgroundImage: 'transparent',
}

export default Navigation
