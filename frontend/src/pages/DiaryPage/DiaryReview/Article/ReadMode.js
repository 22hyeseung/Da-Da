import React, { Component } from 'react'
import { connect } from 'react-redux'

//스타일링
import {
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'
import {
  savedContainer,
  buttonIcon,
} from '../StyledDiaryReview'
import '../diaryReview.css'

// 리덕스 액션
import {
  changeModeLong,
  deleteArticleOfDB,
} from '../../../../actions/review'

class ReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteLogAndChangeToWriteMode(id) {
    this.props.deleteArticleOfDB(id)
    this.props.changeMode(this.props.isPostMode)
    window.localStorage.setItem('content', '')
  }

  render() {
    const {
      articleSaved,
      changeMode,
      isEditorMode,
    } = this.props

    return (
      <div>
        <Header as="h4">
          오늘의 일기
          {/* 수정 버튼 */}
          <Button
            style={{
              ...buttonIcon,
              marginLeft: '16px',
            }}
            onClick={() =>
              changeMode(isEditorMode)}
          >
            <Icon name="pencil" />
          </Button>
          {/* 삭제 버튼 */}
          <Button
            style={buttonIcon}
            onClick={() =>
              this.deleteLogAndChangeToWriteMode(
                articleSaved.day_log_id,
              )}
          >
            <Icon name="trash outline" />
          </Button>
        </Header>
        <div
          className="savedArticle"
          style={savedContainer}
          onClick={() => changeMode(isEditorMode)}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                articleSaved.day_log_comment,
            }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleSaved: state.article.articleSaved,
    isEditorMode: state.article.isEditorMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMode: isEditorMode =>
      dispatch(changeModeLong(isEditorMode)),
    deleteArticleOfDB: id =>
      dispatch(deleteArticleOfDB(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadMode)
