import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
  linkTagWrap,
  linkTag,
} from './StyledNavigation'
import { navActive } from '../../actions'

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
  constructor(props) {
    super(props)
    // this.state = {
    //   activeItem: '',
    // }
  }
  // 클릭 시 해당 아이템을 현재 페이지로
  // 다이어리 클릭 => /diary로 페이지 이동 => 현재 페이지: diary (밑줄 효과)
  // handleItemClick = ({ name }) => {
  //   this.setState({
  //     activeItem: `${this.props.activeItem}`,
  //   })
  // }

  render() {
    return routes.map(route => (
      <Menu.Item
        style={linkTagWrap}
        active={
          this.props.activeItem ===
          `${route.linkLabel}`
        }
        onClick={() =>
          this.props.ACTIVE_ACTION(
            `${route.linkLabel}`,
          )}
      >
        <Link
          style={{
            ...linkTag,
            color: `${this.props.color}`,
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
    activeItem: state.navActive.activeItem,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ACTIVE_ACTION: item =>
      dispatch(navActive(item)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavItems)
