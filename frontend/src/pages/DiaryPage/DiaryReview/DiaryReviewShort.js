import React, { Component } from 'react'
import {
  Input,
  Header,
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import {
  shortBox,
  shortInput,
  buttonIcon,
  shortSubmitBtn,
} from './StyledDiaryReview'
import { connect } from 'react-redux'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import {
  getRegretFromDB,
  postRegretToDB,
} from '../../../actions/review'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      errorState: false,
      isVaild: true,
      isPostMode: true,
      regret: '',
    }
  }

  // 읽기모드 <-> 쓰기모드 상태 변경
  changeMode = () => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
  }

  // 반성일기 입력창에 값 입력시 state 변경
  handleRegretValueChange = e => {
    console.log(e.target.value)
    this.setState({ regret: e.target.value })
  }

  // 입력창에 값이 들어왔는지 확인
  isInputValid = () => {
    return this.state.regret
  }

  saveRegretAndGetFromDB = date => {
    this.props.getRegretFromDB(date)
  }

  // 반성일기 등록시 date와 regret db로 전송(Post)
  createRegretAndPostToDB = () => {
    const dateTime = new Date()
    const requestBody = {
      id: 4,
      member_id: 2,
      date: dateTime.toLocaleDateString,
      regret: this.state.regret,
    }
    // DB로 post
    this.props.postRegretToDB(requestBody)
    // 요청 보낸 날짜로 다시 get
    this.saveRegretAndGetFromDB(requestBody.date)
    // 이후 읽기모드로 전환
    this.changeMode()
  }

  render() {
    if (this.state.errorState) {
      return <h1>에러발생</h1>
    }
    if (this.state.isLoading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
    }
    return (
      <div style={shortBox}>
        {this.state.isPostMode ? (
          <div>
            <Header as="h5">
              오늘의 반성 일기 ( 30자 내외 )
            </Header>
            <Input
              style={shortInput}
              value={this.state.regret}
              placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
              onChange={
                this.handleRegretValueChange
              }
            />
            <Button
              style={shortSubmitBtn}
              onClick={
                this.createRegretAndPostToDB
              }
              content="등록"
            />
          </div>
        ) : (
          <div>
            <Header as="h5">
              오늘의 반성 일기 ( 30자 내외 )
              {/* 수정 버튼 */}
              <Button
                style={{
                  ...buttonIcon,
                  marginLeft: '16px',
                }}
                onClick={this.changeMode}
              >
                <FaPencil size={17} />
              </Button>
              {/* 삭제 버튼 */}
              <Button style={buttonIcon}>
                <FaTrashO size={17} />
              </Button>
            </Header>
            <span>
              {/*this.props.regretWrited.regret*/}
              {this.state.regret}
            </span>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    regretWrited: state.readRegret.regretMessage,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getRegretFromDB: date =>
      dispatch(() => getRegretFromDB(date)),
    postRegretToDB: requestBody =>
      dispatch(() => postRegretToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewShortInput)
