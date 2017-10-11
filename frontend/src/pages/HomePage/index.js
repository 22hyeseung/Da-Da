import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import Logo from '../../components/Navigation/Logo'
import RightMenu from '../../components/Navigation/RightMenu'
import {
  Button,
  Grid,
  Header,
  List,
  Segment,
  Image,
  Menu,
  Sidebar,
} from 'semantic-ui-react'
import bgVideo from '../../static/video/bg_login_1m.mp4'
import bgImg from '../../static/img/login_img.jpg'
import { container } from '../../components/Navigation/StyledNavigation'
import foodTabImage from '../../static/img/1.0_home_BG1.jpg'
import fitnessTabImage from '../../static/img/1.0_home_BG2.jpg'
import reviewTabImage from '../../static/img/1.0_home_BG3.jpg'
import './Home.css'

const button = {
  width: '190px',
  borderRadius: '18px',
  marginTop: '42px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255,.5)',
  color: '#fff',
  fontWeight: '100',
}
export const header = {
  fontSize: '28px',
  fontWeight: '100',
  color: '#16325C',
  marginBottom: '42px',
  fontFamily: 'Spoqa Han Sans',
}

export const subHeader = {
  fontFamily: 'montserrat-bold',
  fontSize: '14px',
  color: '#1f2e79',
}

class HomePage extends Component {
  state = { visible: false }

  toggleVisibility = () =>
    this.setState({
      visible: !this.state.visible,
    })
  render() {
    const { visible } = this.state
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
              <Button style={button}>시작하기</Button>
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
              className="home-rightColumn-first"
              style={{ padding: '0px' }}
            >
              <div
                className="home-rightColumn-first"
                style={{
                  padding: '35px',
                  backgroundImage: `url(${foodTabImage})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
              >
                <span className="home-label">
                  <Header style={header}>
                    <Header.Subheader
                      style={subHeader}
                    >
                      FOOD DIARY
                    </Header.Subheader>
                    오늘의 식단 다이어리
                  </Header>
                </span>
              </div>
            </Grid.Column>
            <Grid.Column
              className="home-rightColumn-second"
              style={{
                padding: '35px',
                backgroundImage: `url(${fitnessTabImage})`,
                backgroundSize: 'cover',
              }}
            >
              2
            </Grid.Column>
            <Grid.Column
              className="home-rightColumn-third"
              style={{
                padding: '35px',
                backgroundImage: `url(${reviewTabImage})`,
                backgroundSize: 'cover',
              }}
            >
              3
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default HomePage
