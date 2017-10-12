import React, {Component} from 'react'
import {
  Button,
  Header,
  Grid,
} from 'semantic-ui-react'
import './Login.css'
import bgVideo from '../../static/video/bg_login.mp4'
import bgImg from '../../static/img/login_img.jpg'

class LoginPage extends Component{
  state = {
    popupWindow: null,
    token: null,
    signingIn: false,
    userInfo: null
  }

  componentWillMount() {
    if (localStorage.token) {
      this.setState({
        token: localStorage.token
      })
    }
  }

  componentDidMount() {
    if (this.state.token) {
      this.getUserInfo()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.tokenHandler)
  }

  tokenHandler = e => {
    const token = e.data

    if (e.origin === 'http://localhost:5000') {
      window.localStorage.token = token
      this.state.popupWindow.close()
      this.setState({
        token,
        complete: true,
        popupWindow: null,
        signingIn: false
      })
      this.getUserInfo()
    }
    console.log(token, '<< [ token ]');
  }

  getUserInfo = () => {
    fetch(`http://localhost:5000/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }).then(res => {
      console.log(res, '<< [ res ]')
      return res.json()
    }).then(json => {
      // fetch로 ajax json받기 위해서는 promise를 두번 써야만 가능?? axios처럼 한번에 안됨;
      console.log(json, '<< [ json ]');
    })
  }

  logIn = target => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open(`http://localhost:5000/auth/${target}`)
    this.setState({
      popupWindow,
      signingIn: true
    })
  }

  render(){
    return (
      <div className="login">
      <video autoPlay loop poster={bgImg}>
        <source src={bgVideo} type="video/mp4" />
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

            >
              <Header.Subheader

              >
                건강하고 올바른 <br />
                <span style={{ fontWeight: '700' }}>
                  다
                </span>이어트를 위한 식단 <br />
                <span style={{ fontWeight: '700' }}>
                  다
                </span>이어리 서비스<br />
              </Header.Subheader>
              DA,DA
            </Header>
            <div className="login-socialBtns">
              <Button
                fluid
                onClick={() => this.logIn('facebook')}
              >
                Facebook 계정으로 로그인 하기
              </Button>
              <Button
                fluid
                onClick={() => this.logIn('instagram')}
              >
                {/* <Fa.FaInstagram /> */}
                Instagram 계정으로 로그인 하기
              </Button>
              <Button
                fluid
                onClick={() => this.logIn('naver')}
              >
                Naver 계정으로 로그인 하기
              </Button>
              <Button
                fluid

                onClick={() => this.logIn('kakao')}
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
};

export default LoginPage
