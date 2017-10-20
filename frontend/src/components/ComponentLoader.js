import React from 'react'
import './ComponentLoader.css'

export default class Loader extends React.Component {
  render() {
    return (
      <div>
        <div className="componentloader-container">
          <div className="componentloader-dot" />
          <div className="componentloader-dot" />
          <div className="componentloader-dot" />
        </div>
      </div>
    )
  }
}
