import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import {
  Grid,
  Image,
  Segment,
  Button,
  Modal,
} from 'semantic-ui-react'
import '../Navigation.css'
import * as Style from '../StyledNavigation'
// 리덕스 액션
import { logOut } from '../../../actions/auth'

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
    const { userInfo } = this.props
    return (
      <Grid style={Style.PopWrap}>
        <Grid.Row style={Style.row_1}>
          <Grid.Column style={Style.row_1_col_1}>
            <Image
              style={Style.avatar_pop}
              shape="circular"
              src={userInfo.userAvatar}
            />
          </Grid.Column>
          <Grid.Column style={Style.row_1_col_2}>
            <p style={Style.username_pop}>
              {userInfo.userName}
            </p>
            <p style={Style.userSize}>
              {
                userInfo.userDefault
                  .day_log_height
              }cm /{' '}
              {userInfo.userDefault.day_log_kg !==
              null
                ? userInfo.userDefault.day_log_kg
                : 0}{' '}
              kg
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={Style.row_2}>
          <Segment style={Style.row_2_segment}>
            <p style={Style.d_day}>
              오늘은 10일차 입니다.
            </p>
            <div style={Style.goalWrap}>
              목표체중까지
              <p>
                <span style={Style.goalWeight}>
                  9
                </span>kg 남았습니다.
              </p>
            </div>
          </Segment>
        </Grid.Row>
        <Grid.Row style={Style.row_3}>
          <Button
            basic
            style={Style.logout}
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
              style={Style.logoutContent}
            >
              <img
                src={Style.crybabyGif}
                alt="로그아웃 직전에 나오는 사진입니다"
                style={Style.logoutImg}
              />
              <span className="navigation-logout-message">
                <span style={Style.logoutHeader}>
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
                style={Style.notLogoutBtn}
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
