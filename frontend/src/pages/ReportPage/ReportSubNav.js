import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import './Report.css'

import {
  setTodayDate,
  setTodayDay,
  setBeforeDate,
  setBeforeDay,
} from '../../actions/setDate'

import {
  getDateNDaysBefore, // N일전 날짜 구하는 함수
  todaysDate, // string타입 오늘 날짜
  todaysDay, // string타입 오늘 요일
  setDay, // int -> string 요일 구하는 함수
  dateTime, // date타입 오늘 날짜
} from '../../helper/date'

// 6일전 날짜
const beforeDate = getDateNDaysBefore(
  dateTime,
  6,
).toLocaleDateString()

// 6일전 요일
const beforeDay = setDay(
  getDateNDaysBefore(dateTime, 6).getDay(),
)

class ReportSubNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDate: todaysDate,
      lastDay: todaysDay,
      beforeDate: beforeDate,
      beforeDay: beforeDay,
    }
  }

  componentWillMount() {
    const {
      lastDate,
      lastDay,
      beforeDate,
      beforeDay,
    } = this.state
    this.props.setTodayDate(lastDate)
    this.props.setTodayDay(lastDay)
    this.props.setBeforeDate(beforeDate)
    this.props.setBeforeDay(beforeDay)
  }

  // goToPreviousDate() {
  //   this.props.setTodayDate(lastDate)
  //   this.props.setTodayDay(lastDay)
  //   this.props.setBeforeDate(beforeDate)
  //   this.props.setBeforeDay(beforeDay)
  // }

  render() {
    const {
      beforeDateState,
      beforeDayState,
      lastDateState,
      lastDayState,
    } = this.props
    return (
      <div className="report">
        <nav className="report-submenu">
          <Icon name="chevron left" />
          <span className="report-date">
            {beforeDateState}
            <span className="report-day">
              {' '}
              {beforeDayState}
            </span>
          </span>
          -
          <span className="report-date">
            {lastDateState}
            <span className="report-day">
              {' '}
              {lastDayState}
            </span>
          </span>
          <Icon name="chevron right" />
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lastDateState: state.today.date,
    lastDayState: state.today.day,
    beforeDateState: state.beforeDay.beforeDate,
    beforeDayState: state.beforeDay.beforeDay,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTodayDate: date =>
      dispatch(setTodayDate(date)),
    setTodayDay: day =>
      dispatch(setTodayDay(day)),
    setBeforeDate: date =>
      dispatch(setBeforeDate(date)),
    setBeforeDay: day =>
      dispatch(setBeforeDay(day)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportSubNav)
