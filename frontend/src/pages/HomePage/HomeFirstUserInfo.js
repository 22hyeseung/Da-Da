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
  Modal,
  List,
  Image,
} from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import {
  getUserInfo,
  postUserInfo,
} from '../../actions/auth'
import introImg from '../../static/img/home-intro-img.svg'

import { dateStringForApiQuery } from '../../helper/date'

class HomeFirstUserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      disabled: true,
      gender: '여자',
      gender_enum: null,
      birth: null,
      goal_weight: null,
      height: null,
      kg: null,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }
  handleGenderChange = (e, { value }) => {
    this.setState({ gender: value })
    if (value > 0)
      this.setState({
        disabled: false,
      })
  }

  handleBirthChange = e => {
    this.setState({ birth: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  handleGoalWeightChange = e => {
    this.setState({ goal_weight: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  handleHeightChange = e => {
    this.setState({ height: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  handleWeightChange = e => {
    this.setState({ kg: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  componentDidMount() {
    this.state.gender == '남자'
      ? this.setState({
          gender_enum: 1,
        })
      : this.setState({
          gender_enum: 2,
        })
  }

  show = size => () =>
    this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  createPayloadAndPostToDB = () => {
    console.log(this.state.gender_enum)
    console.log(this.state.goal_weight)
    console.log(this.state.height)
    console.log(this.state.kg)
    if (
      !this.state.birth ||
      this.state.birth < 1 ||
      this.state.birth.length < 8 ||
      !this.state.gender_enum ||
      this.state.gender_enum < 1 ||
      !this.state.goal_weight ||
      this.state.goal_weight < 1 ||
      !this.state.height ||
      this.state.height < 1 ||
      !this.state.kg ||
      this.state.kg < 1
    ) {
      return this.setState({
        disabled: true,
      })
    }
    this.props.postUserInfoToDB({
      birth: this.state.birth,
      gender: this.state.gender_enum,
      goal_weight: this.state.goal_weight,
      height: this.state.height,
      kg: this.state.kg,
      date: this.state.date,
    })
    this.close()
  }

  render() {
    const { open, size } = this.state
    const list = {
      padding: '14px 7px',
      borderBottom:
        '1px solid rgb(224, 229, 238)',
      display: 'flex',
      justifyContent: 'space-between',
    }
    return (
      <div className="home-userInfo">
        <Grid
          style={{
            width: '800px',
            margin: '5% auto',
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
                    checked={
                      this.state.gender === '여자'
                    }
                    onChange={
                      this.handleGenderChange
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    className="home-userInfo-radio"
                    label="남자"
                    name="radioGroup"
                    value="남자"
                    checked={
                      this.state.gender === '남자'
                    }
                    onChange={
                      this.handleGenderChange
                    }
                  />
                </Form.Field>
              </Form>
              <Form>
                <Form.Field
                  required
                  className="home-userInfo-label"
                >
                  <label>생년월일</label>
                  <input
                    type="number"
                    placeholder="(YYYYMMDD) 형식으로 입력해주세요"
                    onChange={
                      this.handleBirthChange
                    }
                  />
                </Form.Field>
                <Form.Field
                  required
                  className="home-userInfo-label"
                >
                  <label>키</label>
                  <input
                    type="number"
                    placeholder="cm"
                    onChange={
                      this.handleHeightChange
                    }
                  />
                </Form.Field>
                <Form.Field
                  required
                  className="home-userInfo-label"
                >
                  <label>현재 체중</label>
                  <input
                    type="number"
                    placeholder="kg"
                    onChange={
                      this.handleWeightChange
                    }
                  />
                </Form.Field>
                <Form.Field
                  required
                  className="home-userInfo-label"
                  style={{ marginBottom: '5px' }}
                >
                  <label>목표 체중</label>
                  <input
                    type="number"
                    placeholder="kg"
                    onChange={
                      this.handleGoalWeightChange
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <span
                    style={{
                      color: '#26d0ce',
                      fontSize: '12px',
                    }}
                  >
                    김나영님의 권장 체중은 00kg입니다. (BMI 기준)
                  </span>
                </Form.Field>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    disabled={this.state.disabled}
                    onClick={this.show('mini')}
                    type="submit"
                    style={{
                      color: 'white',
                      fontFamily:
                        'Spoqa Han Sans',
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

                  <Modal
                    size={size}
                    open={open}
                    onClose={this.close}
                  >
                    <Modal.Header
                      style={{
                        textAlign: 'center',
                        fontWeight: '100',
                      }}
                    >
                      <Image
                        src={
                          this.props.userInfo
                            .userAvatar
                        }
                        avatar
                        style={{
                          display: 'block',
                          width: '70px',
                          height: '70px',
                          margin: '0px auto 14px',
                        }}
                      />
                      <span
                        style={{
                          fontWeight: '600',
                        }}
                      >
                        {
                          this.props.userInfo
                            .userName
                        }
                      </span>
                      님의 기본정보
                    </Modal.Header>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Modal.Description
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          marginTop: '14px',
                        }}
                      >
                        {/*
                        <List>
                          <List.Item>
                            <List.Content>
                              성별
                            </List.Content>
                            <List.Content>
                              {this.state.gender}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name="marker" />
                            <List.Content>
                              {this.state.birth}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name="mail" />
                            <List.Content>
                              {this.state.height}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name="linkify" />
                            <List.Content>
                              {this.state.kg}
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name="linkify" />
                            <List.Content>
                              {
                                this.state
                                  .goal_weight
                              }
                            </List.Content>
                          </List.Item>
                            </List>
                            */}

                        <ul
                          style={{
                            listStyle: 'none',
                          }}
                        >
                          <li style={list}>
                            <span
                              style={{
                                color: '#a8b7c7',
                                width: '100px',
                                display:
                                  'inline-block',
                              }}
                            >
                              성별
                            </span>
                            <span>
                              {this.state.gender}
                            </span>
                          </li>
                          <li style={list}>
                            <span
                              style={{
                                color: '#a8b7c7',
                                width: '100px',
                                display:
                                  'inline-block',
                              }}
                            >
                              생일
                            </span>
                            <span>
                              {this.state.birth}
                            </span>
                          </li>
                          <li style={list}>
                            <span
                              style={{
                                color: '#a8b7c7',
                                width: '100px',
                                display:
                                  'inline-block',
                              }}
                            >
                              키
                            </span>
                            <span>
                              {this.state.height}
                            </span>
                          </li>
                          <li style={list}>
                            <span
                              style={{
                                color: '#a8b7c7',
                                width: '100px',
                                display:
                                  'inline-block',
                              }}
                            >
                              현재 체중
                            </span>
                            <span>
                              {this.state.kg}
                            </span>
                          </li>
                          <li style={list}>
                            <span
                              style={{
                                color: '#a8b7c7',
                                width: '100px',
                                display:
                                  'inline-block',
                              }}
                            >
                              목표 체중
                            </span>
                            <span>
                              {
                                this.state
                                  .goal_weight
                              }
                            </span>
                          </li>
                        </ul>
                        <p
                          style={{
                            fontSize: '14px',
                            marginTop: '28px',
                            fontWeight: '200',
                            padding:
                              '0px 14px 14px 14px',
                            lineHeight: '2px',
                            backgroundColor:
                              'lemonchiffon',
                          }}
                        >
                          작성하신 정보가 확실한가요?
                        </p>
                      </Modal.Description>
                    </div>
                    <Modal.Content
                      style={{ display: 'flex' }}
                    >
                      <Button
                        basic
                        fluid
                        onClick={this.close}
                        style={{
                          fontFamily:
                            'Spoqa Han Sans',
                          fontWeight: '100',
                          padding: '10px 34px',
                        }}
                      >
                        수정하기
                      </Button>
                      <Button
                        disabled={
                          this.state.disabled
                        }
                        fluid
                        style={{
                          color: 'white',
                          fontFamily:
                            'Spoqa Han Sans',
                          fontWeight: '100',
                          padding: '10px 34px',
                          backgroundImage:
                            'linear-gradient(249deg, #485563, #29323c)',
                          marginRight: '0px',
                        }}
                        onClick={
                          this
                            .createPayloadAndPostToDB
                        }
                      >
                        입장하기
                      </Button>
                    </Modal.Content>
                  </Modal>
                </div>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column
            width={8}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <img
              src={introImg}
              alt="intro 이미지입니다."
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo,
  token: state.auth.token,
  dateState: state.today.date,
})

const mapDispatchtoProps = dispatch => ({
  postUserInfoToDB: payload =>
    dispatch(postUserInfo(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(HomeFirstUserInfo)
