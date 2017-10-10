import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import './Navigation.css'

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

class Navigation extends Component {
  state = { activeItem: '다이어리' }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu
        className="navigation"
        style={{
          opacity: `${this.props.opacity}`,
          backgroundImage: `${this.props
            .backgroundImage}`,
          border: 'none',
        }}
        inverted={this.props.inverted}
        pointing
        secondary>
        <Menu.Item className="navigation-logo">
          DA, DA
        </Menu.Item>
        <Menu.Menu
          position="right"
          style={{ paddingBottom: '8px' }}>
          {routes.map(route => (
            <Menu.Item
              style={{
                padding: '20px 10px 7px',
                marginLeft: '37px',
              }}
              name={route.linkLabel}
              active={
                activeItem ===
                `${route.linkLabel}`
              }
              onClick={this.handleItemClick}>
              <Link
                className="navigation-item"
                to={route.linkTo}>
                {route.linkLabel}
              </Link>
            </Menu.Item>
          ))}
          <Image
            className="navigation-avatar"
            shape="circular"
            src="https://placeimg.com/34/34/people"
          />
          <span
            className="navigation-username"
            style={{
              color: `${this.props.color}`,
            }}>
            홍길동
          </span>
        </Menu.Menu>
      </Menu>
    )
  }
}

Navigation.defaultProps = {
  inverted: false,
  color: '#16325c',
  opacity: '0',
  backgroundImage: 'transparent',
}

export default Navigation
