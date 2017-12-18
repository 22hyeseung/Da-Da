import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = () => {
  return (
    <Message negative>
      <Message.Header>
        죄송합니다. 예기치 못한 오류가 발생했어요. (◞‸◟；)
      </Message.Header>
      <p>잠시 후 다시 시도해 주세요. (; •͈́ ༚ •͈̀ )</p>
    </Message>
  )
}

export default ErrorMessage
