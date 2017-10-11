import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import {
  Button,
  Grid,
  Header,
} from 'semantic-ui-react'
import bgVideo from '../../static/video/bg_login_1m.mp4'
import bgImg from '../../static/img/login_img.jpg'
import foodTabImage from '../../static/img/1.0_home_BG1.jpg'
import fitnessTabImage from '../../static/img/1.0_home_BG2.jpg'
import reviewTabImage from '../../static/img/1.0_home_BG3.jpg'
import './Home.css'
import * as Style from './StyledHome'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="home-grid">
          <Navigation
            color="#fff"
            inverted="true"
          />
        </div>
        <div className="home-dashboard">
          <div className="home-grid home-hero-content">
            <div className="home-hero-title">
              오늘도 건강한 하루를 시작해볼까요?
            </div>
            <Link
              to="/diary"
              style={{ padding: '12px' }}
            >
              <Button style={Style.button}>
                시작하기
              </Button>
            </Link>
          </div>
          <div className="home-dashboard-filter" />
          <video
            className="home-hero"
            autoPlay
            loop
            poster={bgImg}
          >
            <source
              src={bgVideo}
              type="video/mp4"
            />
          </video>
        </div>
        <div
          style={{
            position: 'fixed',
            height: '100%',
            display: 'flex',
            width: '100%',
          }}
        >
          <Grid
            columns={3}
            padded
            style={{ width: '100%' }}
          >
            <Grid.Column
              style={{ padding: '0px' }}
            >
              <span className="home-label">
                <Header style={Style.header}>
                  <Header.Subheader
                    style={Style.subHeader}
                  >
                    FOOD DIARY
                  </Header.Subheader>
                  오늘<br />
                  무엇을<br />
                  드셨나요?<br />
                </Header>
              </span>
              <Link to="/diary">
                <div
                  className="home-rightColumn-first"
                  style={{
                    backgroundImage: `url(${foodTabImage})`,
                    backgroundSize: 'cover',
                    height: '100%',
                  }}
                />
              </Link>
            </Grid.Column>
            <Grid.Column
              style={{
                padding: '0px',
              }}
            >
              <span className="home-label">
                <Header style={Style.header}>
                  <Header.Subheader
                    style={Style.subHeader}
                  >
                    FITNESS DIARY
                  </Header.Subheader>
                  오늘<br />
                  어떤 운동을<br />
                  하셨나요?<br />
                </Header>
              </span>
              <Link to="/diary/fitness">
                <div
                  className="home-rightColumn-second"
                  style={{
                    backgroundImage: `url(${fitnessTabImage})`,
                    backgroundSize: 'cover',
                    height: '100%',
                  }}
                />
              </Link>
            </Grid.Column>
            <Grid.Column
              style={{
                padding: '0px',
              }}
            >
              <span className="home-label">
                <Header style={Style.header}>
                  <Header.Subheader
                    style={Style.subHeader}
                  >
                    REVIEW DIARY
                  </Header.Subheader>
                  오늘<br />
                  하루를<br />
                  기록해볼까요?<br />
                </Header>
              </span>
              <Link to="/diary/review">
                <div
                  className="home-rightColumn-third"
                  style={{
                    backgroundImage: `url(${reviewTabImage})`,
                    backgroundSize: 'cover',
                    height: '100%',
                  }}
                />
              </Link>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default HomePage
