import React, { Component } from 'react'
import {
  Menu,
  Image,
  Popup,
  Button,
} from 'semantic-ui-react'
import {
  userInfoWrap,
  avatar,
} from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'
import { getUserInfo } from '../../actions/auth.js'
import { connect } from 'react-redux'

class UserInfo extends Component {
  componentDidMount() {
    if (this.props.token) {
      this.getUserInfo()
    }
  }
  getUserInfo = () => {
    fetch(`https://api.downmix.net/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window
          .localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(userInfo => {
        this.props.I_WANT_SAVE_USER_INFO(userInfo)
      })
  }
  render() {
    return (
      <Menu.Item style={userInfoWrap}>
        <Image
          style={avatar}
          shape="circular"
          src={this.props.userInfo.userAvatar}
        />
        {console.log(
          this.props.userInfo.userAvatar,
        )}
        <Popup
          wide
          trigger={
            <Button
              inverted={this.props.inverted}
              content={
                this.props.userInfo.userName
              }
            />
          }
          on="click"
        >
          <UserInfoPopup
            userName={
              this.props.userInfo.userName
            }
            userAvatar={
              this.props.userInfo.userAvatar
            }
          />
        </Popup>
      </Menu.Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo,
    token: state.auth.token,
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    I_WANT_SAVE_USER_INFO: user =>
      dispatch(getUserInfo(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(UserInfo)
