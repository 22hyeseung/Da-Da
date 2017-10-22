import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { button, background } from './StyledHome'
import { Button, Input } from 'semantic-ui-react'
import './Home.css'

class HomeFirstUserInfo extends Component {
  render() {
    return (
      <div className="home-userInfo">
        <div className="home-grid home-hero-content">
          <div className="home-hero-title">
            <span>처음이신가요?</span>
            <span>시작하기 전에 현재의 상태를 입력해주세요!</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '20%',
              height: '50%',
              margin: '0 auto',
            }}
          >
            <Input />
            <Input
              type="number"
              placeholder="키를 입력하세요"
            />
            <Input
              type="number"
              placeholder="몸무게를 입력하세요"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeFirstUserInfo
