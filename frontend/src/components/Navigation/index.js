import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { container } from './StyledNavigation'
import { getUserInfo } from '../../actions/auth'
import Logo from './Logo'
import RightMenu from './RightMenu'
import {
  todaysDate,
  todaysDay,
} from '../../helper/date'
// 리덕스 액션생성자
import {
  setTodayDate,
  setTodayDay,
} from '../../actions/setDate'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: todaysDate,
      day: todaysDay,
    }
  }
  // 유저 정보 및 오늘 날짜 SET
  componentWillMount() {
    this.props.saveUserInfo()
    this.props.setTodayDate(this.state.date)
    this.props.setTodayDay(this.state.day)
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }

  // componentWillReceiveProps(nextProps) {
  //   const { date, day } = nextProps
  //   if (
  //     this.props.dateState !== nextProps.dateState
  //   ) {
  //     this.setState({
  //       date: nextProps.dateState,
  //       day: nextProps.dayState,
  //     })

  //   }
  // }

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
        <RightMenu
          inverted={this.props.inverted}
          color={this.props.color}
        />
      </Menu>
    )
  }
}

// default Props: 컬러 반전이 없는 일반 페이지의 default color
Navigation.defaultProps = {
  color: '#16325c',
  inverted: false,
}

const mapStateToProps = state => ({
  dateState: state.today.date,
  dayState: state.today.day,
})

const mapDispatchToProps = dispatch => ({
  saveUserInfo: () => dispatch(getUserInfo()),
  setTodayDate: date =>
    dispatch(setTodayDate(date)),
  setTodayDay: day => dispatch(setTodayDay(day)),
})

export default connect(null, mapDispatchToProps)(
  Navigation,
)
