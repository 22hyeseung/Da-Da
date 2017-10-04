import React, { Component } from 'react'
import {
  Grid,
  Header,
  Menu,
} from 'semantic-ui-react'
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'
import './Diary.css'

class DiarySubNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="diary-submenu">
          <MdKeyboardArrowLeft />
          <span className="diary-date">
            2017.10.10.
            <span className="diary-day">월</span>
          </span>
          <MdKeyboardArrowRight />
        </nav>
      </div>
    )
  }
}

export default DiarySubNav
