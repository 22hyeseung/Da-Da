import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { reviewBox } from './StyledDiaryReview'

// 컴포넌트
import ShortLog from './ShortLog'
import LongLog from './LongLog'
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
          <ShortLog />
          {/* 오늘의 일기*/}
          <LongLog />
        </Segment>
      </div>
    )
  }
}

export default DiaryReview
