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
let activeItem = '다이어리'

const handleItemClick = (e, { name }) => {
  activeItem = name
}

const Navigation = () => {
  return (
    <Menu
      className="navigation"
      style={{
        border: 'none',
      }}
      pointing
      secondary
    >
      <Menu.Item className="navigation-logo">
        DA, DA
      </Menu.Item>
      <Menu.Menu
        position="right"
        style={{ paddingBottom: '8px' }}
      >
        {routes.map(route => (
          <Menu.Item
            style={{
              padding: '20px 10px 7px',
              marginLeft: '37px',
            }}
            name={route.linkLabel}
            active={
              activeItem === `${route.linkLabel}`
            }
            onClick={handleItemClick}
          >
            <Link
              className="navigation-item"
              to={route.linkTo}
            >
              {route.linkLabel}
            </Link>
          </Menu.Item>
        ))}
        <Image
          className="navigation-avatar"
          shape="circular"
          src="https://placeimg.com/34/34/people"
        />
        <span className="navigation-username">
          홍길동
        </span>
      </Menu.Menu>
    </Menu>
  )
}

export default Navigation
