import React, { Component } from 'react'
import {
  Link,
  withRouter,
} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import * as Style from './StyledDiaryCommon'

const routes = [
  {
    linkLabel: '식단',
    linkTo: '/diary',
    iconDefault: Style.iconSet.foodIcon.default,
    iconWhite: Style.iconSet.foodIcon.white,
  },
  {
    linkLabel: '운동',
    linkTo: '/diary/fitness',
    iconDefault:
      Style.iconSet.fitnessIcon.default,
    iconWhite: Style.iconSet.fitnessIcon.white,
  },
  {
    linkLabel: '일기',
    linkTo: '/diary/review',
    iconDefault: Style.iconSet.reviewIcon.default,
    iconWhite: Style.iconSet.reviewIcon.white,
  },
]

class DiaryTabNav extends Component {
  render() {
    return (
      <Menu
        widths={3}
        style={{
          flexGrow: 'initial',
          boxShadow: 'none',
          marginBottom: '7px',
        }}
      >
        {routes.map(route => {
          const isLinkMatched =
            this.props.location.pathname ===
            route.linkTo
          return (
            <Menu.Item
              className="diary-label"
              active={isLinkMatched}
              style={
                isLinkMatched
                  ? Style.activeTabStyle
                  : Style.defaultTabStyle
              }
            >
              <Link
                to={route.linkTo}
                style={
                  isLinkMatched
                    ? Style.activeFontStyle
                    : Style.defaultFontStyle
                }
              >
                {route.linkLabel}{' '}
                <img
                  src={
                    isLinkMatched
                      ? route.iconWhite
                      : route.iconDefault
                  }
                  alt="의미없는 탭 아이콘 입니다."
                  aria-hidden="true"
                  style={{
                    height: '14px',
                  }}
                />
              </Link>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
}

export default withRouter(DiaryTabNav)
