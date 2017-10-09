import React from 'react'
import {
  Input,
  Header,
  Button,
} from 'semantic-ui-react'
import {
  shortBox,
  shortInput,
  shortSubmitBtn,
} from './StyledDiaryReview'

const DiaryReviewShortInput = () => {
  return (
    <div style={shortBox}>
      <Header as="h5">
        오늘의 반성 일기 ( 30자 내외 )
      </Header>
      <Input
        style={shortInput}
        placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
      />
      <Button
        style={shortSubmitBtn}
        content="등록"
      />
    </div>
  )
}

export default DiaryReviewShortInput
