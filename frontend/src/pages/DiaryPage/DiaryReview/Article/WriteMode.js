import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertFromRaw } from 'draft-js'
// 컨버터(Converter): EditorContent -> HTML
import { stateToHTML } from 'draft-js-export-html'
import { options } from './draftConvertOptions'
// 스타일링
import { Button, Header } from 'semantic-ui-react'
import { longSubmitBtn } from '../StyledDiaryReview'
// 컴포넌트
import TextEditor from '../../../../components/TextEditor'
// 리덕스 액션
import { postArticleToDB } from '../../../../actions/review'
// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class WriteMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: this.props.articleSaved
        .day_log_comment
        ? this.props.articleSaved.day_log_comment
        : '',
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // local wtorage의 content = 에디터에 가장 최근까지 작성된 내용
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

    return stateToHTML(editorContent, options)
  }

  // 작성된 일기(article)를 DB로 POST
  createArticleAndPostToDB = () => {
    let html = this.convertContentStateToHtml()
    const requestBody = {
      comment: html,
      date: this.state.date,
    }
    // DB로 post
    this.props.postArticleToDB(requestBody)
  }

  // 입력창에 값이 들어왔는지 확인
  // isInputValid = () => {
  //   let contentHTML = this.convertContentStateToHtml()
  //   contentHTML = contentHTML
  //     .split('</p>')
  //     .map(line =>
  //       line
  //         .replace('<p>', '')
  //         .replace('<br>', '')
  //         .trim(),
  //     )
  //     .join('')

  //   return !!contentHTML.length // 있으면 true 없으면 false
  // }

  render() {
    return (
      <div>
        <Header as="h4">오늘의 일기</Header>
        <TextEditor />
        <Button
          secondary
          style={longSubmitBtn}
          content={'등록'}
          onClick={this.createArticleAndPostToDB}
          /* disabled={
          this.isInputValid()} */
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleSaved: state.article.articleSaved,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postArticleToDB: requestBody =>
      dispatch(postArticleToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WriteMode)
