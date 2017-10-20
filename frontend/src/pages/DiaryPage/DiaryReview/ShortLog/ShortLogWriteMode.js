import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Header,
  Input,
  Button,
  Message,
} from 'semantic-ui-react'
import {
  shortInput,
  shortSubmitBtn,
} from '../StyledDiaryReview'

// 리덕스 액션
import {
  postShortLogToDB,
  changeMode,
} from '../../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class ShortLogWriteMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVaild: true,
      shortLog: '',
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 반성일기 입력창에 값 입력시 state 변경
  handleShortLogValueChange = e => {
    this.setState({ shortLog: e.target.value })
  }

  // 입력창에 값이 들어왔는지 확인
  isInputValid = () => {
    return this.state.shortLog
  }

  // 입력 받은 일기 길이가 30자 미만인지 확인
  isInputLengthValid = () => {
    return this.state.shortLog.length <= 30
  }

  // 엔터 버튼 클릭시 등록 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createShortLogAndPostToDB()
    }
  }

  // 반성일기 등록시 date와 ShortLog db로 전송(Post)
  createShortLogAndPostToDB = () => {
    const { shortLog, date } = this.state
    const requestBody = {
      regret: shortLog,
      date,
    }
    // DB로 post
    // console.log(requestBody)
    this.props.postShortLogToDB(requestBody)

    // 이후 읽기모드로 전환
    this.props.changeMode(this.props.isPostMode)
  }

  render() {
    return (
      <div>
        <Header as="h5">
          오늘의 반성 일기 ( 30자 내외 )
        </Header>
        <Input
          style={shortInput}
          value={this.state.shortLog}
          placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
          onChange={
            this.handleShortLogValueChange
          }
          onKeyDown={
            this.isInputValid() &&
            this.isInputLengthValid()
              ? this.handleKeyPress
              : null
          }
        />

        <Button
          secondary
          style={shortSubmitBtn}
          onClick={
            // 버튼 클릭시 POST 요청
            this.createShortLogAndPostToDB
          }
          disabled={
            // 입력 값이 없거나 30자를 초과할 경우 버튼 비활성화
            !this.isInputValid() ||
            !this.isInputLengthValid()
          }
          content={'등록'}
        />
        <Message
          negative
          // 입력 길이가 30자를 초과할때만 나타나는 경고창
          hidden={this.isInputLengthValid()}
          style={{ marginRight: '15px' }}
        >
          <Message.Header>
            등록할 수 있는 길이를 초과하였습니다.
          </Message.Header>
          <p> 반성 일기는 30자 이내만 작성 가능합니다.</p>
        </Message>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    dateState: state.today.date,
    isPostMode: state.shortLog.isPostMode,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    postShortLogToDB: requestBody =>
      dispatch(postShortLogToDB(requestBody)),
    changeMode: isPostMode =>
      dispatch(changeMode(isPostMode)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(ShortLogWriteMode)
