import React, { Component } from 'react'
import {
  Grid,
  Image,
  Segment,
  Button,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'
import { connect } from 'react-redux'
import { logOut } from '../../actions/auth'

const UserInfo = ({ userName, userAvatar }) => (
  <Grid style={styled.PopWrap}>
    <Grid.Row style={styled.row_1}>
      <Grid.Column style={styled.row_1_col_1}>
        <Image
          style={styled.avatar_pop}
          shape="circular"
          src={userAvatar}
        />
      </Grid.Column>
      <Grid.Column style={styled.row_1_col_2}>
        <p style={styled.username_pop}>
          {userName}
        </p>
        <p style={styled.userSize}>
          160cm / 60kg
        </p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={styled.row_2}>
      <Segment style={styled.row_2_segment}>
        <p style={styled.d_day}>오늘은 10일차 입니다.</p>
        <div style={styled.goalWrap}>
          목표체중까지
          <p>
            <span style={styled.goalWeight}>
              9
            </span>kg 남았습니다.
          </p>
        </div>
      </Segment>
    </Grid.Row>
    <Grid.Row style={styled.row_3}>
      <Button
        basic
        style={styled.logout}
        onClick={() => this.props.logOut()}
      >
        로그아웃
      </Button>
    </Grid.Row>
  </Grid>
)

const mapDispatchtoProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  }
}

export default connect(null, mapDispatchtoProps)(
  UserInfo,
)
