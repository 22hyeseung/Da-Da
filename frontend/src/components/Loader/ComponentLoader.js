import React from 'react'
import './ComponentLoader.css'

export default class ComponentLoader extends React.Component {
  render() {
    return (
      <div>
        <div className="componentloader-container" style={this.props.posiStyle}>
          <div className="componentloader-dot" />
          <div className="componentloader-dot" />
          <div className="componentloader-dot" />
        </div>
      </div>
    )
  }
}
