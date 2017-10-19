import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'
import reviewIconDefault from '../../../static/img/diary-review_default.svg'
import * as Style from './StyledDiaryReview'
import ShortLogIndex from './ShortLogIndex'
import LongLogIndex from './LongLogIndex'

class DiaryReview extends Component {
  render() {
    return (
      <div>
        <Segment style={Style.reviewBox}>
          {/* title 시작 */}
          <Header style={Style.header}>
            <Header.Subheader
              style={Style.subHeader}
            >
              REVIEW DIARY
            </Header.Subheader>
            오늘의 일기
            <img
              src={reviewIconDefault}
              style={{
                height: '27px',
                marginBottom: '9px',
              }}
              alt="의미없는 일기 표시 아이콘입니다."
              aria-hidden="true"
            />
          </Header>
          {/* title 끝 */}
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
