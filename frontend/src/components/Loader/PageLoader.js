import React from 'react'
import './pageLoader.css'

export default class PageLoader extends React.Component {
  render() {
    return (
      <div className="loader-body">
        <div className="loader-container">
          <span className="loader-shortLog">
            어제의 반성일기가 나오는 부분이다!
          </span>
          <div>
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
          </div>
        </div>
      </div>
    )
  }
}
