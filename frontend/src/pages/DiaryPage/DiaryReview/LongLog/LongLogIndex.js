import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { longBox } from '../StyledDiaryReview'

// 컴포넌트
import LongLogReadMode from './LongLogReadMode'
import LongLogWriteMode from './LongLogWriteMode'

class DiaryReviewLongInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      longLogSaved,
      isEditorMode,
    } = this.props

    return (
      <div style={longBox}>
        {/* 이미 작성한 로그가 있는 지 확인 */}
        {longLogSaved.day_log_comment ? (
          // 작성한 로그가 이미 있으면
          !isEditorMode ? (
            // 기본 화면: 읽기 모드
            <LongLogReadMode />
          ) : (
            // 수정 시 화면: 쓰기 모드
            <LongLogWriteMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          // 기본 화면: 쓰기 모드
          <LongLogWriteMode />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    longLogSaved: state.longLog.longLogSaved,
    isEditorMode: state.longLog.isEditorMode,
  }
}

export default connect(mapStateToProps, null)(
  DiaryReviewLongInput,
)
