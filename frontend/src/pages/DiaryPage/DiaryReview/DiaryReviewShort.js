import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Input,
  Header,
  Button,
  Message,
  Dimmer,
  Loader,
  Icon,
} from 'semantic-ui-react'
import {
  shortBox,
  shortInput,
  buttonIcon,
  shortSubmitBtn,
} from './StyledDiaryReview'
import './diaryReview.css'

// 리듀서 액션
import {
  getShortLogFromDB,
  postShortLogToDB,
} from '../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: false,
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

  // data GET
  // ex. http://localhost:3333/regret?date=20171015
  saveShortLogAndGetFromDB = date => {
    this.props.getShortLogFromDB(date)
  }

  // 반성일기 등록시 date와 ShortLog db로 전송(Post)
  createShortLogAndPostToDB = () => {
    const { shortLog, date } = this.state
    const requestBody = {
      regret: shortLog,
      date,
    }
    // DB로 post
    console.log(requestBody)
    this.props.postShortLogToDB(requestBody)

    // 요청 보낸 날짜로 다시 get
    this.saveShortLogAndGetFromDB(date)
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
          <div>
            <Header as="h5">
              오늘의 반성 일기 ( 30자 내외 )
            </Header>
            <Input
              style={shortInput}
              value={shortLog}
              placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
              onChange={
                this.handleShortLogValueChange
              }
              onKeyDown={
                this.isInputValid() &&
                this.isInputLengthValid()
                  ? this.handleKeyPress
                  : false
              }
            />

            <Button
              secondary
              /* loading={this.state.isPending} */
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
                <Icon name="pencil" />
              </Button>
              {/* 삭제 버튼 */}
              <Button style={buttonIcon}>
                <Icon name="trash outline" />
              </Button>
            </Header>
            <div
              className="savedShortLog"
              onClick={this.changeMode}
            >
              {this.props.shortLogSaved.shortLog}
            </div>
          </div>
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
