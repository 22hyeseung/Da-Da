import React from 'react'
import {
  Button,
  Header,
  Grid,
} from 'semantic-ui-react'
import './Login.css'
import bgVideo from '../../static/video/bg_login.mp4'
import bgImg from '../../static/img/login_img.jpg'
import * as Style from './StyledLogin'

const LoginPage = () => (
  <div className="login">
    <video autoPlay loop poster={bgImg}>
      <source src={bgVideo} type="video/mp4" />
    </video>
    <Grid
      divided="vertically"
      textAlign="left"
      style={Style.grid}
    >
      <Grid.Row columns={4}>
        <Grid.Column>
          <Header
            as="h1"
            className="login-header"
            style={Style.header}
          >
            <Header.Subheader
              style={Style.subheader}
            >
              건강하고 올바른 <br />
              <span
                style={Style.subheaderFirstword}
              >
                다
              </span>이어트를 위한 식단 <br />
              <span
                style={Style.subheaderFirstword}
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
                ...Style.FbBtn,
                ...Style.Btn,
              }}
            >
              Facebook 계정으로 로그인 하기
            </Button>
            <Button
              fluid
              style={{
                ...Style.InstaBtn,
                ...Style.Btn,
              }}
            >
              Instagram 계정으로 로그인 하기
            </Button>
            <Button
              fluid
              style={{
                ...Style.Btn,
                ...Style.NaverBtn,
              }}
            >
              Naver 계정으로 로그인 하기
            </Button>
            <Button
              fluid
              style={{
                ...Style.Btn,
                ...Style.KakaoBtn,
              }}
            >
              Kakao 계정으로 로그인 하기
            </Button>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default LoginPage
