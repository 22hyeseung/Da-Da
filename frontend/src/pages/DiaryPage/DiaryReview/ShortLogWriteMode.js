import React from 'react'
import {
  Header,
  Input,
  Button,
  Message,
} from 'semantic-ui-react'
import {
  shortInput,
  shortSubmitBtn,
} from './StyledDiaryReview'

const ShortLogInput = props => {
  return (
    <div>
      <Header as="h5">
        오늘의 반성 일기 ( 30자 내외 )
      </Header>
      <Input
        style={shortInput}
        value={props.shortLog}
        placeholder="오늘 하루, 스스로의 약속을 잘 지키셨나요?"
        onChange={props.handleShortLogValueChange}
        onKeyDown={
          props.isInputValid() &&
          props.isInputLengthValid()
            ? props.handleKeyPress
            : false
        }
      />

      <Button
        secondary
        style={shortSubmitBtn}
        onClick={
          // 버튼 클릭시 POST 요청
          props.createShortLogAndPostToDB
        }
        disabled={
          // 입력 값이 없거나 30자를 초과할 경우 버튼 비활성화
          !props.isInputValid() ||
          !props.isInputLengthValid()
        }
        content={'등록'}
      />
      <Message
        negative
        // 입력 길이가 30자를 초과할때만 나타나는 경고창
        hidden={props.isInputLengthValid()}
        style={{ marginRight: '15px' }}
      >
        <Message.Header>
          등록할 수 있는 길이를 초과하였습니다.
        </Message.Header>
        <p> 반성 일기는 30자 이내만 작성 가능합니다.</p>
      </Message>
    </div>
  )
}

export default ShortLogInput
