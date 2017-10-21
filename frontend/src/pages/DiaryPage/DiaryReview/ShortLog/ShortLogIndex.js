import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { shortBox } from '../StyledDiaryReview'

// 컴포넌트
import ShortLogWriteMode from './ShortLogWriteMode'
import ShortLogReadMode from './ShortLogReadMode'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      isPostMode,
      shortLogSaved,
    } = this.props

    return (
      <div style={shortBox}>
        {/* 이미 작성한 로그가 있는 지 확인 */}
        {shortLogSaved.day_log_regret ? (
          // 작성한 로그가 이미 있으면
          !isPostMode ? (
            // 기본 화면: 읽기 모드
            <ShortLogReadMode />
          ) : (
            // 수정 시 화면: 쓰기 모드
            <ShortLogWriteMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          // 기본 화면: 쓰기 모드
          <ShortLogWriteMode />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    isPostMode: state.shortLog.isPostMode,
  }
}

export default connect(mapStateToProps, null)(
  DiaryReviewShortInput,
)
