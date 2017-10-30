import React, { Component } from 'react'
import {
  Menu,
  Image,
  Popup,
  Button,
  Icon,
} from 'semantic-ui-react'
import {
  userInfoWrap,
  avatar,
  button,
} from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'
import { connect } from 'react-redux'

class UserInfo extends Component {
  render() {
    return (
      <Menu.Item style={userInfoWrap}>
        <Image
          style={avatar}
          shape="circular"
          src={this.props.userInfo.userAvatar}
        />
        <Popup
          wide
          trigger={
            <div
              style={{
                ...button,
                color: this.props.color,
              }}
            >
              {this.props.userInfo.userName}
              <Icon
                name="caret down"
                style={{
                  fontSize: '16px',
                }}
              />
            </div>
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
  }
}

export default connect(mapStateToProps, null)(
  UserInfo,
)
