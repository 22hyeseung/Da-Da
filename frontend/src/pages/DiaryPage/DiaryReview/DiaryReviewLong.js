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
  getLongLogFromDB,
  postLongLogToDB,
} from '../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryReviewLongInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorState: false,
      isVaild: true,
      isPostMode: true,
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
    // console.log(editorContent)
    // console.log(typeof stateToHTML(editorContent))
    return stateToHTML(editorContent)
  }

  // 작성된 LongLog를 DB로 POST
  createLongLogAndPostToDB = () => {
    let html = this.convertContentStateToHtml()
    const requestBody = {
      comment: html,
      date: this.state.date,
    }
    // DB로 post
    // console.log(requestBody)
    this.props.postLongLogToDB(requestBody)

    // 이후 읽기모드로 전환
    this.changeMode()
  }

  render() {
    const {
      errorState,
      isLoading,
      isPostMode,
    } = this.state
    const { longLogSaved } = this.props

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
      <div style={longBox}>
        <Header as="h5">오늘의 일기</Header>
        {isPostMode ? (
          <div>
            <TextEditor />
            <Button
              style={longSubmitBtn}
              content={'등록'}
              onClick={
                this.createLongLogAndPostToDB
              }
            />
          </div>
        ) : (
          <div style={savedContainer}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  longLogSaved.day_log_comment,
              }}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    longLogSaved: state.longLog.longLogSaved,
    dateState: state.today.date,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getLongLogFromDB: date =>
      dispatch(getLongLogFromDB(date)),
    postLongLogToDB: requestBody =>
      dispatch(postLongLogToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewLongInput)
