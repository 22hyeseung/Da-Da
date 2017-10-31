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
import API_HOST from '../../config'
import { connect } from 'react-redux'
import {
  saveToken,
  getUserInfo,
} from '../../actions/auth.js'

class LoginPage extends Component {
  state = {
    popupWindow: null,
    message: null,
  }

  componentWillUnmount() {
    window.removeEventListener(
      'message',
      this.tokenHandler,
    )
  }

  tokenValidation = () => {
    this.props.userInfo.userName !== null
      ? this.props.history.push('/')
      : this.setState({
          message: '새로고침 후 다시 로그인 해주세요.',
        })
  }

  // token 갖고오는 함수 작동. > 여기서 토큰 저장
  tokenHandler = e => {
    const token = e.data
    if (e.origin === `${API_HOST}` && token) {
      window.localStorage.token = token // window에 토큰 저장
      this.props.saveToken(token)
      this.state.popupWindow.close()
      this.setState({
        popupWindow: null,
      })
      this.props.getUserInfo()
      setTimeout(this.tokenValidation, 100)
    }
  }

  // sns를 target으로 받아서 분리시킴
  logIn = target => {
    window.addEventListener(
      'message',
      this.tokenHandler,
    )
    const popupWindow = window.open(
      `${API_HOST}/auth/${target}`,
      '_blank',
      'left = 300, top = 150, width=850, height=630;',
    )
    this.setState({
      popupWindow: popupWindow,
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
              <span style={{ color: 'white' }}>
                {this.state.message}
              </span>
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
    token: state.auth.token,
    userInfo: state.auth.userInfo,
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    saveToken: token =>
      dispatch(saveToken(token)),
    getUserInfo: () => dispatch(getUserInfo()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(LoginPage)
