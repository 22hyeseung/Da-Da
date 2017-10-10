import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import {
  longBox,
  longSubmitBtn,
} from './StyledDiaryReview'
import TextEditor from '../../../components/TextEditor'

class DiaryReviewShortInput extends Component {
  render() {
    return (
      <div style={longBox}>
        <Header as="h5">오늘의 일기</Header>
        <TextEditor />
        <Button
          style={longSubmitBtn}
          content="등록"
        />
      </div>
    )
  }
}

export default DiaryReviewShortInput
