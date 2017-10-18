import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Header,
  Button,
  Dimmer,
  Loader,
} from 'semantic-ui-react'
import {
  longBox,
  longSubmitBtn,
  savedContainer,
} from './StyledDiaryReview'
import TextEditor from '../../../components/TextEditor'
import {
  getCommentFromDB,
  postCommentToDB,
} from '../../../actions/review'

class DiaryReviewLongInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: false,
      isVaild: true,
      isPostMode: true,
      // comment: '',
    }
  }

  // 읽기모드 <-> 쓰기모드 상태 변경
  changeMode = () => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
  }

  // DB에 저장된 comment GET
  saveCommentAndGetFromDB = date => {
    this.props.getCommentFromDB(date)
  }

  // local Storage에 저장된 에디터에 작성된 내용(가장 최근, 마지막 상태)
  // 불러와서 comment state에 set
  // local Storage에 저장하는 부분은 TextEditor/index.js에 있음
  loadExistingContentFromLocalStorage = () => {
    const content = JSON.parse(
      window.localStorage.getItem('content'),
    )

    let localContent = ''

    content.blocks.map(p => {
      return (localContent += '\n' + p.text)
    })

    return localContent.trim()
  }

  // 작성된 comment를 DB로 POST
  createCommentAndPostToDB = () => {
    const localContent = this.loadExistingContentFromLocalStorage()

    const dateTime = new Date()
    const date = dateTime.toLocaleDateString()
    const requestBody = {
      comment: localContent,
      date,
    }
    // DB로 post
    // console.log(requestBody)
    this.props.postCommentToDB(requestBody)

    // 요청 보낸 날짜로 다시 get
    this.saveCommentAndGetFromDB(date)
    // 이후 읽기모드로 전환
    this.changeMode()
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
      <div style={longBox}>
        <Header as="h5">오늘의 일기</Header>
        {this.state.isPostMode ? (
          <div>
            <TextEditor />
            <Button
              style={longSubmitBtn}
              content={'등록'}
              onClick={
                this.createCommentAndPostToDB
              }
            />
          </div>
        ) : (
          <div style={savedContainer}>
            {this.props.commentWrited.comment}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    commentWrited:
      state.readComment.commentWrited,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getCommentFromDB: date =>
      dispatch(getCommentFromDB(date)),
    postCommentToDB: requestBody =>
      dispatch(postCommentToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewLongInput)
