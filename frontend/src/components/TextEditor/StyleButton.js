import React, { Component } from 'react'
import { Style } from './StyledTextEditor'
import { Button } from 'semantic-ui-react'

class StyleButton extends Component {
  constructor() {
    super()
    this.onClick = e => {
      e.preventDefault()
      this.props.onClick(this.props.blockStyle)
    }
  }
  render() {
    return (
      <Button
        style={Style.button}
        icon={this.props.icon}
        onClick={this.onClick}
      />
    )
  }
}

export default StyleButton
