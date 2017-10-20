import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import rootApi from '../../config'
// 스타일링
import { Grid } from 'semantic-ui-react'
import { tabContainer } from './StyledHome'
import './Home.css'
// 리덕스 액션생성자
import { getUserInfo } from '../../actions/auth.js'

// 컴포넌트
import Navigation from '../../components/Navigation'
import Loader from '../../components/Loader/index'
import HomeHero from './HomeHero'
import HomeTab from './HomeTab'

// 홈페이지 컴포넌트 시작
class HomePage extends Component {
  state = {
    loading: false,
  }

  // 유저 정보 및 오늘 날짜 SET
  componentWillMount() {
    this.getUserInfo()
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }

  fetchData = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 4000)
  }

  // 로그인한 유저 정보 GET
  getUserInfo = () => {
    fetch(`${rootApi}/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(userInfo => {
        this.props.saveUserInfo(userInfo)
      })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div>
        <div className="home-grid">
          <Navigation
            color="#fff"
            inverted="true"
          />
        </div>

        {/* Hero 컴포넌트 */}
        <HomeHero />

        <div style={tabContainer}>
          <Grid
            columns={3}
            padded
            style={{ width: '100%' }}
          >
            {/* 다이어리 Food 페이지로 이동하는 탭 */}
            <HomeTab
              tabName="FOOD"
              message="오늘br무엇을br드셨나요?"
              linkTo="/diary"
              order="first"
            />
            {/* 다이어리 Fitness 페이지로 이동하는 탭 */}
            <HomeTab
              tabName="FITNESS"
              message="오늘br어떤 운동을br하셨나요?"
              linkTo="/diary/fitness"
              order="second"
            />
            {/* 다이어리 Review 페이지로 이동하는 탭 */}
            <HomeTab
              tabName="REVIEW"
              message="오늘br하루를br기록해볼까요?"
              linkTo="/diary/review"
              order="third"
            />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo,
  token: state.auth.token,
})

const mapDispatchtoProps = dispatch => ({
  saveUserInfo: user =>
    dispatch(getUserInfo(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(HomePage)
