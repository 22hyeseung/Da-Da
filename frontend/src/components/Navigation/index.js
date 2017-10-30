import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { container } from './StyledNavigation'
import { getUserInfo } from '../../actions/auth'
import Logo from './Logo'
import RightMenu from './RightMenu'

class Navigation extends Component {
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

const mapDispatchtoProps = dispatch => ({
  saveUserInfo: () => dispatch(getUserInfo()),
})

export default connect(null, mapDispatchtoProps)(
  Navigation,
)
