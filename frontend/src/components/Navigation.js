import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

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

class Navigation extends Component {
  state = { activeItem: '다이어리' }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary>
        <Menu.Item name="logo">Logo</Menu.Item>
        <Menu.Menu position="right">
          {routes.map(route => (
            <Menu.Item
              name={route.linkLabel}
              active={
                activeItem ===
                `${route.linkLabel}`
              }
              onClick={this.handleItemClick}>
              <Link to={route.linkTo}>
                {route.linkLabel}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navigation
