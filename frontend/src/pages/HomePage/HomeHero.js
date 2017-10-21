import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { button, background } from './StyledHome'
import { Button } from 'semantic-ui-react'
import './Home.css'

class HomeHero extends Component {
  render() {
    return (
      <div className="home-dashboard">
        <div className="home-grid home-hero-content">
          <div className="home-hero-title">
            오늘도 건강한 하루를 시작해볼까요?
          </div>
          <Link
            to="/diary"
            style={{ padding: '12px' }}
          >
            <Button style={button}>시작하기</Button>
          </Link>
        </div>
        <div className="home-dashboard-filter" />
        <video
          className="home-hero"
          autoPlay
          loop
          poster={background.poster}
        >
          <source
            src={background.video}
            type="video/mp4"
          />
        </video>
      </div>
    )
  }
}

export default HomeHero
