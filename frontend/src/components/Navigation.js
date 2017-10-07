import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Image,
  Popup,
  Button,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'

// 네비게이션 아이템: 다이어리/리포트/체중기록/레시피검색
const routes = [
  {
    linkLabel: '다이어리',
    linkTo: '/diary',
  },
  {
    linkLabel: '리포트',
    linkTo: '/report',
  },
  {
    linkLabel: '체중 기록',
    linkTo: '/weight',
  },
  {
    linkLabel: '레시피 검색',
    linkTo: '/search',
  },
]

// 현재 페이지가 어디인지,
//  active 효과 적용 대상
// let activeItem = ''

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: '',
    }
  }
  // 클릭 시 해당 아이템을 현재 페이지로
  // 다이어리 클릭 => /diary로 페이지 이동 => 현재 페이지: diary (밑줄 효과)
  handleItemClick = ({ name }) => {
    this.setState({
      activeItem: name,
    })
  }

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

        {/* 오른쪽: 네비게이션 아이템 + 유저 정보 */}
        <Menu.Menu
          position="right"
          style={styled.itemWrap}
        >
          {routes.map(route => (
            <Menu.Item
              style={styled.linkTagWrap}
              name={route.linkLabel}
              active={
                this.state.activeItem ===
                `${route.linkLabel}`
              }
              onClick={this.handleItemClick}
            >
              <Link
                style={styled.linkTag}
                to={route.linkTo}
              >
                {route.linkLabel}
              </Link>
            </Menu.Item>
          ))}
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
