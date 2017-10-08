import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

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

const link = {
  color: '#A8B7C7',
  marginLeft: '10px',
}
const Footer = () => {
  return (
    <div className="footer">
      <span>
        © 2017
        <a
          href="https://github.com/huusz/Da-Da"
          style={link}
        >
          Da,Da
        </a>
      </span>
      <div>
        {routes.map(route => (
          <span>
            <Link style={link} to={route.linkTo}>
              {route.linkLabel}
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}
export default Footer
