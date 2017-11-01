import React, { Component } from 'react'
import { connect } from 'react-redux'
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
            <span>
              {this.props.userInfo.userName}님!
            </span>
            <span style={{ marginTop: '14px' }}>
              오늘도 건강한 하루를 시작해볼까요?
            </span>
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

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo,
  }
}

export default connect(mapStateToProps, null)(
  HomeHero,
)
