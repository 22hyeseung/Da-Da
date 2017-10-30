import React, { Component } from 'react'
import {
  Link,
  withRouter,
} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {
  itemWrap,
  linkTagWrap,
  linkTag,
} from './StyledNavigation'
import UserInfo from './UserInfo'

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
class componentName extends Component {
  render() {
    return (
      <Menu.Menu
        position="right"
        style={itemWrap}
      >
        {routes.map(route => {
          const isLinkMatched =
            this.props.location.pathname ===
            route.linkTo
          return (
            <Menu.Item
              style={linkTagWrap}
              active={isLinkMatched}
            >
              <Link
                style={{
                  ...linkTag,
                  color: this.props.color,
                }}
                to={route.linkTo}
              >
                {route.linkLabel}
              </Link>
            </Menu.Item>
          )
        })}

        {/* 유저 정보 + 팝업*/}
        <UserInfo
          inverted={this.props.inverted}
        />
      </Menu.Menu>
    )
  }
}

export default withRouter(componentName)
