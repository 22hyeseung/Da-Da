import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import './404.css'

const button = {
  width: '190px',
  marginTop: '37px',
  borderRadius: '18px',
  backgroundImage:
    'linear-gradient(259deg, #26d0ce, #1a2980)',
  color: '#fff',
  fontWeight: '100',
}

const notFoundPage = () => (
  <div className="notFound-wrapper">
    <div className="notFound-grid">
      <Navigation />
      <div class="notFound-content">
        <span className="notFound-header">
          404
        </span>
        <span className="notFound-subHeader">
          현재 찾을 수 없는 페이지를 요청 하셨습니다.
        </span>
        <Link to="/Home">
          <Button style={button}>홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  </div>
)

export default notFoundPage
