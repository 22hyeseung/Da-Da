import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertFromRaw } from 'draft-js'

// 스타일링
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

// 컴포넌트
import TextEditor from '../../../components/TextEditor'

// 컨버터(Converter)
// EditorContent -> HTML
import { stateToHTML } from 'draft-js-export-html'
// EditorContent <- HTML
import { stateFromHTML } from 'draft-js-import-html'

// 리덕스 액션 생성자
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

  // local Storage의 content = 에디터에 가장 최근까지 작성된 내용
  // local Storage에 저장하는 부분은 TextEditor/index.js에 있음
  loadExistingContentFromLocalStorage = () => {
    // String -> JSON
    return JSON.parse(
      window.localStorage.getItem('content'),
    )
  }

  convertContentStateToHtml = () => {
    // JSON -> ContentState
    const content = this.loadExistingContentFromLocalStorage()
    // ContentState -> HTML
    const editorContent = convertFromRaw(content)
    console.log(editorContent)
    console.log(typeof stateToHTML(editorContent))
    return stateToHTML(editorContent)
  }

  // 작성된 comment를 DB로 POST
  createCommentAndPostToDB = () => {
    let html = this.convertContentStateToHtml()
    const date = '20171019'
    const requestBody = {
      comment: html,
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
