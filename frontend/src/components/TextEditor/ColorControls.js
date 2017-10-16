import React, { Component } from 'react'
import StyleButton from './StyleButton'
import { styles } from './StyledTextEditor'
const COLORS = [
  { label: 'Red', style: 'red' },
  { label: 'Orange', style: 'orange' },
  { label: 'Yellow', style: 'yellow' },
  { label: 'Green', style: 'green' },
  { label: 'Blue', style: 'blue' },
  { label: 'Indigo', style: 'indigo' },
  { label: 'Violet', style: 'violet' },
]

const ColorControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div style={styles.controls}>
      {COLORS.map(type => (
        <StyleButton
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

export default ColorControls
