import React, { Component } from 'react'
import {
  Grid,
  Header,
  Menu,
} from 'semantic-ui-react'
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'
import './Report.css'

class ReportSubNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="report">
        <nav className="report-submenu">
          <MdKeyboardArrowLeft />
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
          <MdKeyboardArrowRight />
        </nav>
      </div>
    )
  }
}

export default ReportSubNav
