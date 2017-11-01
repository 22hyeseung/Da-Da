import React, { Component } from 'react'
import { Style } from './StyledTextEditor'
import { Button } from 'semantic-ui-react'

export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.onClick = e => {
      e.preventDefault()
      this.props.onClick(this.props.colorStyle)
    }
  }
  render() {
    return (
      <Button
        style={{
          ...Style.colorPicker,
          backgroundColor: this.props.color,
        }}
        onClick={this.onClick}
      />
    )
  }
}
