import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import * as styled from './StyledNavigation'

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

class Router extends Component {
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
    return routes.map(route => (
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
    ))
  }
}

export default Router
