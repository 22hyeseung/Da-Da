import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
  linkTagWrap,
  linkTag,
} from './StyledNavigation'
import { changeNavigationItemActive } from '../../actions/navItemActive'

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

class NavItems extends Component {
  render() {
    return routes.map(route => (
      <Menu.Item
        style={linkTagWrap}
        active={
          this.props.activeNavItem ===
          route.linkLabel
        }
        onClick={() =>
          this.props.changeNavigationItemActive(
            route.linkLabel,
          )}
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
    ))
  }
}

const mapStateToProps = state => {
  return {
    activeNavItem:
      state.navActiveItem.activeNavItem,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeNavigationItemActive: item =>
      dispatch(changeNavigationItemActive(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavItems)
