import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './Report.css'

class ReportSubNav extends Component {
  render() {
    return (
      <div className="report">
        <nav className="report-submenu">
          <Icon name="chevron left" />
          <span className="report-date">
            2017.10.10.<span className="report-day">
              월
            </span>
          </span>
          -
          <span className="report-date">
            2017.10.17.<span className="report-day">
              일
            </span>
          </span>
          <Icon name="chevron right" />
        </nav>
      </div>
    )
  }
}

export default ReportSubNav
