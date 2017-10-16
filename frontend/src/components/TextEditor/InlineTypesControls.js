import React from 'react'
import { Button } from 'semantic-ui-react'
import { Style } from './StyledTextEditor'
import StyleButton from './StyleButton'

const INLINE_TYPES = [
  { label: 'Bold', style: 'BOLD', icon: 'bold' },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: 'italic',
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: 'underline',
  },
  {
    label: 'Strikethrough',
    style: 'STRIKETHROUGH',
    icon: 'strikethrough',
  },
]

const InlineTypesControls = props => {
  return (
    <Button.Group style={Style.buttonGroup}>
      {INLINE_TYPES.map(type => (
        <StyleButton
          icon={type.icon}
          blockStyle={type.style}
          onClick={props.onClick}
        />
      ))}
    </Button.Group>
  )
}

export default InlineTypesControls
