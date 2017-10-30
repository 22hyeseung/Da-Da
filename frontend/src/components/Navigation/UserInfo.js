import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import {
  Menu,
  Image,
  Popup,
  Icon,
} from 'semantic-ui-react'
import {
  userInfoWrap,
  avatar,
  userName,
} from './StyledNavigation'
// 컴포넌트
import UserInfoPopup from './UserInfoPopup'

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
                ...userName,
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
