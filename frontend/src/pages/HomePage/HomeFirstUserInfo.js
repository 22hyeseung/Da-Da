import React, { Component } from 'react'
import * as Style from './StyledHome'
import {
  Button,
  Grid,
  Form,
  Radio,
  Modal,
  Image,
} from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import { postUserInfo } from '../../actions/auth'
import introImg from '../../static/img/home-intro-img.svg'
import { dateStringForApiQuery } from '../../helper/date'

const dateTime = new Date().toLocaleDateString()

class HomeFirstUserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      disabled: true,
      gender: '여자',
      gender_enum: null,
      birth: '20001010',
      goal_weight: null,
      recommend_kcal: null,
      height: null,
      kg: null,
      date: dateStringForApiQuery(dateTime),
    }
  }
  // 성별을 받는 핸들러
  handleGenderChange = (e, { value }) => {
    this.setState({ gender: value })
    if (value > 0)
      this.setState({
        disabled: false,
      })
  }

  // 생일을 받는 핸들러
  handleBirthChange = e => {
    this.setState({ birth: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // 목표체중 받는 핸들러
  handleGoalWeightChange = e => {
    this.setState({ goal_weight: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // 목표칼로리 받는 핸들러
  handleGoalKcalChange = e => {
    this.setState({
      recommend_kcal: e.target.value,
    })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }
  // 키를 받는 핸들러
  handleHeightChange = e => {
    this.setState({ height: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // 몸무게를 받는 핸들러
  handleWeightChange = e => {
    this.setState({ kg: e.target.value })
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // 성별을 Enum으로 바꾸기
  componentDidMount() {
    this.state.gender === '남자'
      ? this.setState({
          gender_enum: 1,
        })
      : this.setState({
          gender_enum: 2,
        })
  }

  // 모달 사이즈, toggle 함수
  show = size => () =>
    this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  createPayloadAndPostToDB = () => {
    if (
      !this.state.birth ||
      this.state.birth < 1 ||
      this.state.birth.length < 8 ||
      !this.state.gender_enum ||
      this.state.gender_enum < 1 ||
      !this.state.goal_weight ||
      this.state.goal_weight < 1 ||
      !this.state.recommend_kcal ||
      this.state.recommend_kcal < 1 ||
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
      kcal: this.state.recommend_kcal,
    })
    // 좋은 방법이 아니다.
    setTimeout(this.close, 100)
    setTimeout(window.location.reload(), 300)
  }

  render() {
    const { open, size } = this.state

    // BMI 권장 체중 계산식
    const BMIweight =
      this.state.gender === '여자'
        ? (Math.pow(this.state.height / 100, 2) *
            21
          ).toFixed(2)
        : (Math.pow(this.state.height / 100, 2) *
            22
          ).toFixed(2)

    const today = new Date()
    const todayYear = today.getFullYear()
    const age =
      todayYear - this.state.birth.slice(0, 4)

    const BEEkcal =
      this.state.gender === '여자'
        ? 65.51 +
          9.56 * this.state.kg +
          1.85 * this.state.height -
          4.68 * age
        : 66.47 +
          9.56 * this.state.kg +
          1.85 * this.state.height -
          4.68 * age

    return (
      <div className="home-userInfo">
        <Grid
          style={{
            width: '800px',
            margin: '2% auto',
          }}
        >
          <Grid.Column width={8}>
            <div style={Style.introTitle}>
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
              <Form style={Style.form}>
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent:
                      'space-between',
                  }}
                >
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
                </div>
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
                    김나영님의 권장 체중은
                    {BMIweight}kg입니다. (BMI 기준)
                  </span>
                </Form.Field>
                <Form.Field
                  required
                  className="home-userInfo-label"
                  style={{ marginBottom: '5px' }}
                >
                  <label>목표 칼로리</label>
                  <input
                    type="number"
                    placeholder="kcal"
                    onChange={
                      this.handleGoalKcalChange
                    }
                  />
                </Form.Field>
                <Form.Field>
                  {BEEkcal < 0 ||
                  !this.state.height ||
                  !this.state.kg ? (
                    <span
                      style={{
                        color: '#26d0ce',
                        fontSize: '12px',
                      }}
                    >
                      김나영님의 권장 칼로리는 0kcal입니다. (BEE
                      기준)
                    </span>
                  ) : (
                    <span
                      style={{
                        color: '#26d0ce',
                        fontSize: '12px',
                      }}
                    >
                      김나영님의 하루 권장 칼로리는
                      {BEEkcal.toFixed(2)}kcal입니다.
                      (BEE 기준)
                    </span>
                  )}
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
                    style={Style.fakeSubmitBtn}
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
                        style={Style.modalAvatar}
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
                        style={
                          Style.modalDescription
                        }
                      >
                        <ul
                          style={{
                            listStyle: 'none',
                          }}
                        >
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
                            >
                              성별
                            </span>
                            <span>
                              {this.state.gender}
                            </span>
                          </li>
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
                            >
                              생일
                            </span>
                            <span>
                              {this.state.birth}
                            </span>
                          </li>
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
                            >
                              키
                            </span>
                            <span>
                              {this.state.height}
                            </span>
                          </li>
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
                            >
                              현재 체중
                            </span>
                            <span>
                              {this.state.kg}
                            </span>
                          </li>
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
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
                          <li style={Style.list}>
                            <span
                              style={
                                Style.listLabel
                              }
                            >
                              목표 칼로리
                            </span>
                            <span>
                              {
                                this.state
                                  .recommend_kcal
                              }
                            </span>
                          </li>
                        </ul>
                        <p style={Style.lastMsg}>
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
                        style={Style.cancleBtn}
                      >
                        수정하기
                      </Button>
                      <Button
                        disabled={
                          this.state.disabled
                        }
                        fluid
                        style={Style.submitBtn}
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
