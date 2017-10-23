import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { button, background } from './StyledHome'
import {
  Button,
  Input,
  Grid,
  Form,
  Radio,
  Checkbox,
} from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import { getUserInfo } from '../../actions/auth'

class HomeFirstUserInfo extends Component {
  render() {
    return (
      <div className="home-userInfo">
        <Grid
          style={{
            width: '800px',
            margin: '7% auto',
          }}
        >
          <Grid.Column width={8}>
            <div
              style={{
                fontSize: '35px',
                lineHeight: '45px',
                marginBottom: '35px',
              }}
            >
              <span>
                {this.props.userInfo.userName}
              </span>님 <br />
              <span
                style={{
                  fontFamily: 'montserrat-bold',
                }}
              >
                DA, DA
              </span>에 오신 것을<br />
              환영합니다!
            </div>
            <span
              style={{
                marginBottom: '35px',
                opacity: '0.73',
              }}
            >
              더 나은 이용을 위해서는{' '}
              {this.props.userInfo.userName}님의 기본
              정보가 필요합니다.
            </span>
            <div style={{ marginTop: '28px' }}>
              <Form
                style={{
                  display: 'flex',
                  width: '30%',
                  justifyContent: 'space-between',
                }}
              >
                <Form.Field>
                  <Radio
                    className="home-userInfo-radio"
                    label="여자"
                    name="radioGroup"
                    value="여자"
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    className="home-userInfo-radio"
                    label="남자"
                    name="radioGroup"
                    value="남자"
                  />
                </Form.Field>
              </Form>
              <Form>
                <Form.Field required>
                  <label>생년월일</label>
                  <input placeholder="(YYYYMMDD) 형식으로 입력해주세요" />
                </Form.Field>
                <Form.Field required>
                  <label>키</label>
                  <input placeholder="cm" />
                </Form.Field>
                <Form.Field required>
                  <label>현재 체중</label>
                  <input placeholder="kg" />
                </Form.Field>
                <Form.Field required>
                  <label>목표 체중</label>
                  <input placeholder="kg" />
                </Form.Field>
                <Form.Field>
                  <span
                    style={{ color: '#26d0ce' }}
                  >
                    김나영님의 권장 체중은 00kg입니다. (BMI 기준)
                  </span>
                </Form.Field>
                <Button
                  type="submit"
                  style={{
                    color: 'white',
                    fontFamily: 'Spoqa Han Sans',
                    fontWeight: '100',
                    padding: '10px 34px',
                    backgroundImage:
                      'linear-gradient(250deg, #26d0ce, #1a2980)',
                    marginRight: '0px',
                    boxShadow:
                      '0 2px 4px 0 rgba(0, 0, 0, 0.5)',
                  }}
                >
                  입장하기
                </Button>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column width={8} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo,
  token: state.auth.token,
})

const mapDispatchtoProps = dispatch => ({
  saveUserInfo: () => dispatch(getUserInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(HomeFirstUserInfo)
