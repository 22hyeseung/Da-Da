import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { Dimmer, Loader } from 'semantic-ui-react'
import { shortBox } from './StyledDiaryReview'

// 리듀서 액션
import {
  getShortLogFromDB,
  postShortLogToDB,
} from '../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

// 컴포넌트
import ShortLogWriteMode from './ShortLogWriteMode'
import ShortLogReadMode from './ShortLogReadMode'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: false,
      isLogExisted: false,
      isVaild: true,
      isPostMode: true,
      shortLog: '',
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 읽기모드 <-> 쓰기모드 상태 변경
  changeMode = () => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
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
    this.changeMode()
  }

  // 엔터 버튼 클릭시 등록 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      // console.log('enter pressed!')
      this.createShortLogAndPostToDB()
    }
  }

  render() {
    const {
      errorState,
      isLoading,
      isPostMode,
      shortLog,
    } = this.state
    if (errorState) {
      return <h1>ERROR!</h1>
    }
    if (isLoading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
    }

    return (
      <div style={shortBox}>
        {isPostMode ? (
          <ShortLogWriteMode
            shortLog={shortLog}
            handleShortLogValueChange={
              this.handleShortLogValueChange
            }
            isInputValid={this.isInputValid}
            isInputLengthValid={
              this.isInputLengthValid
            }
            handleKeyPress={this.handleKeyPress}
            createShortLogAndPostToDB={
              this.createShortLogAndPostToDB
            }
          />
        ) : (
          <ShortLogReadMode
            changeMode={this.changeMode}
            shortLogSaved={
              this.props.shortLogSaved
                .day_log_regret
            }
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    dateState: state.today.date,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getShortLogFromDB: date =>
      dispatch(getShortLogFromDB(date)),
    postShortLogToDB: requestBody =>
      dispatch(postShortLogToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewShortInput)
