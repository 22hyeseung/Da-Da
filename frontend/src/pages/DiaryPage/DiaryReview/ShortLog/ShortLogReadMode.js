import React from 'react'
import {
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'
import { buttonIcon } from '../StyledDiaryReview'
import '../diaryReview.css'

const ShortLogReadMode = props => {
  return (
    <div>
      <Header as="h5">
        오늘의 반성 일기 ( 30자 내외 )
        {/* 수정 버튼 */}
        <Button
          style={{
            ...buttonIcon,
            marginLeft: '16px',
          }}
          onClick={props.changeMode}
        >
          <Icon name="pencil" />
        </Button>
        {/* 삭제 버튼 */}
        <Button style={buttonIcon}>
          <Icon name="trash outline" />
        </Button>
      </Header>
      <div
        className="savedShortLog"
        onClick={props.changeMode}
      >
        {props.shortLogSaved}
      </div>
    </div>
  )
}

export default ShortLogReadMode
