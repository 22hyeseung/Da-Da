import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    linkLabel: '체중',
    linkTo: '/weight',
  },
  {
    linkLabel: '검색',
    linkTo: '/search',
  },
]

class Header extends Component {
  render() {
    return (
      <div className="ui container">
        {routes.map(route => (
          <Link to={route.linkTo} class="item">
            {route.linkLabel}
          </Link>
        ))}
      </div>
    )
  }
}

export default Header
