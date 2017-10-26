import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// 스타일링
import { Grid } from 'semantic-ui-react'
import { tabContainer } from './StyledHome'
import './Home.css'
// 리덕스 액션생성자
import { getUserInfo } from '../../actions/auth.js'

// 컴포넌트
import Navigation from '../../components/Navigation'
import Loader from '../../components/Loader/index'
import HomeFirstUserInfo from './HomeFirstUserInfo'
import HomeHero from './HomeHero'
import HomeTab from './HomeTab'

// 홈페이지 컴포넌트 시작
class HomePage extends Component {
  state = {
    loading: false,
  }

  // 유저 정보 및 오늘 날짜 SET
  componentWillMount() {
    this.props.saveUserInfo()
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

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div>
        {!!this.props.userInfo.userBirth &&
        !!this.props.userInfo.userGoalWeight &&
        !!this.props.userInfo.userGender ? (
          <div>
            {console.log(
              !!this.props.userInfo.userBirth,
              !!this.props.userInfo
                .userGoalWeight,
              !!this.props.userInfo.userGender,
            )}
            <div className="home-grid">
              <Navigation
                color="#fff"
                inverted="true"
              />
            </div>
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
                  message="오늘\n무엇을\n드셨나요?"
                  linkTo="/diary"
                  order="first"
                />
                {/* 다이어리 Fitness 페이지로 이동하는 탭 */}
                <HomeTab
                  tabName="FITNESS"
                  message="오늘\n어떤 운동을\n하셨나요?"
                  linkTo="/diary/fitness"
                  order="second"
                />
                {/* 다이어리 Review 페이지로 이동하는 탭 */}
                <HomeTab
                  tabName="REVIEW"
                  message="오늘\n하루를\n기록해볼까요?"
                  linkTo="/diary/review"
                  order="third"
                />
              </Grid>
            </div>
          </div>
        ) : (
          <HomeFirstUserInfo />
        )}
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
)(HomePage)
