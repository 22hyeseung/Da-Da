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
import { SERVER_HOSTNAME } from '../../../config'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPending: false,
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
    this.setState({
      isPending: true,
    })
    const dateTime = new Date()
    const date = dateTime.toLocaleDateString
    const requestBody = {
      id: 4,
      member_id: 2,
      regret: this.state.regret,
      date,
    }
    // DB로 post
    // this.props.postRegretToDB(requestBody)

    fetch(`${SERVER_HOSTNAME}/regret`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(requestBody),
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isPending: false,
          regretWrited: [
            result,
            ...this.state.regretWrited,
          ],
        })
      })
      .catch(res => {
        console.log(res)
        this.setState({
          isPending: false,
        })
      })

    // 요청 보낸 날짜로 다시 get
    this.saveRegretAndGetFromDB(date)
    // 이후 읽기모드로 전환
    this.changeMode()
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      console.log('enter pressed!')
      this.createRegretAndPostToDB()
    }
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
              onKeyDown={
                this.isInputValid()
                  ? this.handleKeyPress
                  : false
              }
            />
            <Button
              secondary
              loading={this.state.isPending}
              style={shortSubmitBtn}
              onClick={
                this.createRegretAndPostToDB
              }
              disabled={
                !this.isInputValid() ||
                this.state.isPending
              }
              content={'등록'}
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
            <div onClick={this.changeMode}>
              {this.props.regretWrited.regret}
              {/*this.state.regret*/}
            </div>
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
