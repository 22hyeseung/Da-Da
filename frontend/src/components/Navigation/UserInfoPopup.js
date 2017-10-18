import React, { Component } from 'react'
import {
  Grid,
  Image,
  Segment,
  Button,
  Modal,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'
import { connect } from 'react-redux'
import { logOut } from '../../actions/auth'
import crybaby from '../../static/img/crybaby.gif'
import './Navigation.css'

class UserInfo extends Component {
  state = { open: false }
  // alert modal
  show = size => () =>
    this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleLogout = () => {
    window.localStorage.token = ''
    this.props.onlogOut()
  }

  render() {
    const { open, size } = this.state
    return (
      <Grid style={styled.PopWrap}>
        <Grid.Row style={styled.row_1}>
          <Grid.Column style={styled.row_1_col_1}>
            <Image
              style={styled.avatar_pop}
              shape="circular"
              src={this.props.userInfo.userAvatar}
            />
          </Grid.Column>
          <Grid.Column style={styled.row_1_col_2}>
            <p style={styled.username_pop}>
              {this.props.userInfo.userName}
            </p>
            <p style={styled.userSize}>
              160cm / 60kg
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={styled.row_2}>
          <Segment style={styled.row_2_segment}>
            <p style={styled.d_day}>
              오늘은 10일차 입니다.
            </p>
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
            onClick={this.show('mini')}
          >
            로그아웃
          </Button>
          <Modal
            size={size}
            open={open}
            onClose={this.close}
            className="uerpopup-logout"
          >
            <Modal.Content
              style={styled.logoutContent}
            >
              <img
                src={crybaby}
                alt="로그아웃 직전에 나오는 사진입니다"
                style={styled.logoutImg}
              />
              <span className="navigation-logout-message">
                <span style={styled.logoutHeader}>
                  정말 나갈꼬에요?
                </span>
                당신의 다짐은.. 이제 다 사라진건가요..? <br />
                포기하지마세요! <br />
              </span>
            </Modal.Content>
            <div className="navigation-logout-buttons">
              <Button
                basic
                content="전..나가야합니다"
                onClick={() =>
                  this.handleLogout()}
              />
              <Button
                content="안나갈께요!!"
                style={styled.notLogoutBtn}
              />
            </div>
          </Modal>
        </Grid.Row>
      </Grid>
    )
  }
}
const mapStateToProps = state => {
  return {
    userInfo: state.auth.userInfo,
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    onlogOut: () => dispatch(logOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(UserInfo)
