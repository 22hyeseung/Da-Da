import React, { Component } from 'react'
import {
  Menu,
  Image,
  Popup,
  Button,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'

class UserInfo extends Component {
  render() {
    return (
      <Menu.Item style={styled.userInfoWrap}>
        <Image
          style={styled.avatar}
          shape="circular"
          src="https://placeimg.com/34/34/people"
        />
        <Popup
          wide
          trigger={
            <Button
              inverted={this.props.inverted}
              content="홍길동"
            />
          }
          on="click"
        >
          <UserInfoPopup />
        </Popup>
      </Menu.Item>
    )
  }
}

export default UserInfo
