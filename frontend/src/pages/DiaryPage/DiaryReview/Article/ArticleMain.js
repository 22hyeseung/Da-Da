import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { longBox } from '../StyledDiaryReview'

// 컴포넌트
import ReadMode from './ReadMode'
import WriteMode from './WriteMode'

class ArticleMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      articleSaved,
      isEditorMode,
    } = this.props

    return (
      <div style={longBox}>
        {/* 이미 작성한 로그가 있는 지 확인 */}
        {articleSaved.day_log_comment ? (
          // 작성한 로그가 이미 있으면
          !isEditorMode ? (
            // 기본 화면: 읽기 모드
            <ReadMode />
          ) : (
            // 수정 시 화면: 쓰기 모드
            <WriteMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          // 기본 화면: 쓰기 모드
          <WriteMode />
        )}
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

export default connect(mapStateToProps, null)(
  ArticleMain,
)
