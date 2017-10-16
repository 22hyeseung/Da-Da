import React from 'react'
import { Button } from 'semantic-ui-react'
import { Style } from './StyledTextEditor'
import StyleButton from './StyleButton'

const BLOCK_TYPES = [
  {
    style: 'header-two',
    icon: 'header',
  },
  { style: 'blockquote', icon: 'quote left' },
  {
    style: 'align-left',
    icon: 'align left',
  },
  {
    style: 'align-center',
    icon: 'align center',
  },
  {
    style: 'align-right',
    icon: 'align right',
  },
  {
    style: 'unordered-list-item',
    icon: 'unordered list',
  },
  {
    style: 'ordered-list-item',
    icon: 'ordered list',
  },
]

const BlockTypesControl = props => {
  return (
    <Button.Group style={Style.buttonGroup}>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          icon={type.icon}
          blockStyle={type.style}
          onClick={props.onClick}
        />
      ))}
    </Button.Group>
  )
}

export default BlockTypesControl
