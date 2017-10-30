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
import { postCommentToDB } from '../../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class WriteMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: this.props.commentSaved
        .day_log_regret
        ? this.props.commentSaved.day_log_regret
        : '',
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 반성일기 입력창에 값 입력시 state 변경
  handleCommentValueChange = e => {
    this.setState({ comment: e.target.value })
  }

  // 입력창에 값이 들어왔는지 확인
  isInputValid = () => {
    return this.state.comment
  }

  // 입력 받은 일기 길이가 30자 미만인지 확인
  isInputLengthValid = () => {
    return this.state.comment.length <= 30
  }

  // 엔터 버튼 클릭시 등록 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createCommentAndPostToDB()
    }
  }

  // 반성 일기 등록시 date와 Comment db로 전송(Post)
  createCommentAndPostToDB = () => {
    const { comment, date } = this.state
    const requestBody = {
      regret: comment,
      date,
    }
    // DB로 post
    this.props.postCommentToDB(requestBody)
  }

  render() {
    return (
      <div>
        <Header as="h4">
          오늘의 반성 일기 ( 30자 내외 )
        </Header>
        <Input
          style={shortInput}
          value={this.state.comment}
          placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
          onChange={this.handleCommentValueChange}
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
            this.createCommentAndPostToDB
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
    commentSaved: state.comment.commentSaved,
    dateState: state.today.date,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    postCommentToDB: requestBody =>
      dispatch(postCommentToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(WriteMode)
