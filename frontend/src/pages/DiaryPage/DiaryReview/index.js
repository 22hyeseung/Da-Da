import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { reviewBox } from './StyledDiaryReview'

// 컴포넌트
import ShortLogIndex from './ShortLogIndex'
import LongLogIndex from './LongLogIndex'
import DiarySubHeader from '../DiarySubHeader'

class DiaryReview extends Component {
  render() {
    return (
      <div>
        <Segment style={reviewBox}>
          {/* title */}
          <DiarySubHeader
            tabNameEN="REVIEW"
            tabNameKR="일기"
            icon="reviewIcon"
          />
          {/* 오늘의 반성일기 */}
          <ShortLogIndex />
          {/* 오늘의 일기*/}
          <LongLogIndex />
        </Segment>
      </div>
    )
  }
}

export default DiaryReview
