import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Input,
  Header,
  Button,
  Message,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import {
  shortBox,
  shortInput,
  buttonIcon,
  shortSubmitBtn,
} from './StyledDiaryReview'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import {
  getRegretFromDB,
  postRegretToDB,
} from '../../../actions/review'
import './diaryReview.css'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  // 입력 받은 일기 길이가 30자 미만인지 확인
  isInputLengthValid = () => {
    return this.state.regret.length <= 30
  }

  // data GET
  // ex. http://localhost:3333/regret?date=2017. 10. 15.
  saveRegretAndGetFromDB = date => {
    this.props.getRegretFromDB(date)
  }

  // 반성일기 등록시 date와 regret db로 전송(Post)
  createRegretAndPostToDB = () => {
    const dateTime = new Date()
    const date = dateTime.toLocaleDateString()
    const requestBody = {
      member_id: 2,
      regret: this.state.regret,
      date,
    }
    // DB로 post
    console.log(requestBody)
    this.props.postRegretToDB(requestBody)

    // 요청 보낸 날짜로 다시 get
    //
    this.saveRegretAndGetFromDB(date)
    // 이후 읽기모드로 전환
    this.changeMode()
  }

  // 엔터 버튼 클릭시 등록 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      // console.log('enter pressed!')
      this.createRegretAndPostToDB()
    }
  }

  render() {
    if (this.state.errorState) {
      return <h1>ERROR!</h1>
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
                this.createRegretAndPostToDB
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
                <FaPencil size={17} />
              </Button>
              {/* 삭제 버튼 */}
              <Button style={buttonIcon}>
                <FaTrashO size={17} />
              </Button>
            </Header>
            <div
              className="savedRegret"
              onClick={this.changeMode}
            >
              {this.props.regretWrited.regret}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    regretWrited: state.readRegret.regretWrited,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getRegretFromDB: date =>
      dispatch(getRegretFromDB(date)),
    postRegretToDB: requestBody =>
      dispatch(postRegretToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewShortInput)
