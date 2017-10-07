import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import styled from './StyledNavigation'
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

let activeItem = '다이어리'

const handleItemClick = (e, { name }) => {
  activeItem = name
}

const Navigation = () => {
  return (
    <Menu
      style={styled.container}
      inverted={this.prosp.inverted}
      pointing
      secondary
    >
      <Menu.Item style={styled.logo}>
        DA, DA
      </Menu.Item>
      <Menu.Menu
        position="right"
        style={{ paddingBottom: '8px' }}
      >
        {routes.map(route => (
          <Menu.Item
            style={linkTagWrap}
            name={route.linkLabel}
            active={
              activeItem === `${route.linkLabel}`
            }
            onClick={handleItemClick}
          >
            <Link
              style={linkTag}
              to={route.linkTo}
            >
              {route.linkLabel}
            </Link>
          </Menu.Item>
        ))}
        <Image
          style={styled.avatar}
          shape="circular"
          src="https://placeimg.com/34/34/people"
        />
        <span
          style={{
            ...styled.username,
            color: `${this.props.color}`,
          }}
        >
          홍길동
        </span>
      </Menu.Menu>
    </Menu>
  )
}

Navigation.defaultProps = {
  inverted: false,
  color: '#16325c',
  opacity: '0',
  backgroundImage: 'transparent',
}

export default Navigation
