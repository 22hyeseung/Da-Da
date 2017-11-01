import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { container } from './StyledNavigation'
import { getUserInfo } from '../../actions/auth'
import Logo from './Logo'
import RightMenu from './RightMenu'
// 리덕스 액션생성자
import {
  setTodayDateAndDay,
  setBeforeDateAndDay,
} from '../../actions/setDate'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleString(),
    }
  }
  // 유저 정보 및 오늘 날짜 SET
  componentWillMount() {
    this.props.saveUserInfo()
    this.props.setTodayDateAndDay()
    this.props.setBeforeDateAndDay(
      this.state.date,
    )
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
    return (
      // 네비게이션 시작
      <Menu style={container} pointing secondary>
        {/* 왼쪽: 로고 */}
        <Logo color={this.props.color} />

        {/* 오른쪽: 네비게이션 아이템*/}
        <RightMenu color={this.props.color} />
      </Menu>
    )
  }
}

// default Props: 컬러 반전이 없는 일반 페이지의 default color
Navigation.defaultProps = {
  color: '#16325c',
}

const mapDispatchToProps = dispatch => ({
  saveUserInfo: () => dispatch(getUserInfo()),
  setTodayDateAndDay: () =>
    dispatch(setTodayDateAndDay()),
  setBeforeDateAndDay: date =>
    dispatch(setBeforeDateAndDay(date)),
})

export default connect(null, mapDispatchToProps)(
  Navigation,
)
