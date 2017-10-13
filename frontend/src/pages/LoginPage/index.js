import React, { Component } from 'react'
import {
  Button,
  Header,
  Grid,
} from 'semantic-ui-react'
import './Login.css'
import bgVideo from '../../static/video/bg_login_1m.mp4'
import bgImg from '../../static/img/login_img.jpg'
import * as Style from './StyledLogin'
import { connect } from 'react-redux'

class LoginPage extends Component {
  state = {
    popupWindow: null,
  }

  componentWillMount() {
    if (localStorage.token) {
      this.setState({
        token: localStorage.token,
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      'message',
      this.tokenHandler,
    )
  }

  getUserInfo = () => {
    fetch(`http://api.downmix.net/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state
          .token}`,
      },
    })
      .then(res => {
        console.log(res, '<< [ res ]')
        return res.json()
      })
      .then(json => {
        console.log(json, '<< [ json ]')
      })
  }

  tokenHandler = e => {
    const token = e.data
    if (
      e.origin === 'http://api.downmix.net' &&
      token
    ) {
      window.localStorage.token = token
      //
      this.state.popupWindow.close()
      this.setState({
        complete: true,
        popupWindow: null,
      })

      this.getUserInfo()
    }
    console.log(token, '<< [ token ]')
  }

  logIn = target => {
    window.addEventListener(
      'message',
      this.tokenHandler,
    )
    const popupWindow = window.open(
      `http://api.downmix.net/auth/${target}`,
    )
    this.setState({
      popupWindow,
    })
  }

  render() {
    return (
      <div className="login">
        <video autoPlay loop poster={bgImg}>
          <source
            src={bgVideo}
            type="video/mp4"
          />
        </video>
        <Grid
          divided="vertically"
          textAlign="left"
          style={{ marginTop: '127px' }}
        >
          <Grid.Row columns={4}>
            <Grid.Column>
              <Header
                as="h1"
                className="login-header"
                style={Style.header}
              >
                <Header.Subheader
                  style={Style.subHeader}
                >
                  건강하고 올바른 <br />
                  <span
                    style={{ fontWeight: '700' }}
                  >
                    다
                  </span>이어트를 위한 식단 <br />
                  <span
                    style={{ fontWeight: '700' }}
                  >
                    다
                  </span>이어리 서비스<br />
                </Header.Subheader>
                DA,DA
              </Header>
              <div className="login-socialBtns">
                <Button
                  fluid
                  style={{
                    ...Style.Btn,
                    backgroundImage:
                      'linear-gradient(261deg, #0f2e6c, #4267b2)',
                  }}
                  onClick={() =>
                    this.logIn('facebook')}
                >
                  Facebook 계정으로 로그인 하기
                </Button>
                <Button
                  fluid
                  style={{
                    ...Style.Btn,
                    backgroundImage:
                      'linear-gradient(279deg, #515bd4, #8134af 23%, #dd2a7b 48%, #feda77)',
                  }}
                  onClick={() =>
                    this.logIn('instagram')}
                >
                  {/* <Fa.FaInstagram /> */}
                  Instagram 계정으로 로그인 하기
                </Button>
                <Button
                  fluid
                  style={{
                    ...Style.Btn,
                    backgroundImage:
                      'linear-gradient(261deg, #008215, #00c73c)',
                  }}
                  onClick={() =>
                    this.logIn('naver')}
                >
                  Naver 계정으로 로그인 하기
                </Button>
                <Button
                  fluid
                  style={{
                    ...Style.Btn,
                    backgroundImage:
                      'linear-gradient(261deg, #ffb600, #fae200)',
                    color: '#16325c',
                  }}
                  onClick={() =>
                    this.logIn('kakao')}
                >
                  Kakao 계정으로 로그인 하기
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: this.auth.token,
    member_sns: this.auth.member_sns,
    member_name: this.auth.member_name,
    member_avatar_url: this.auth
      .member_avatar_url,
  }
}

export default connect(mapStateToProps, null)(
  LoginPage,
)
