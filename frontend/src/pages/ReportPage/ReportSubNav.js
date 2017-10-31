import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import './Report.css'

import {
  moveToPrevDate,
  moveToNextDate,
} from '../../actions/setDate'

import { dateStringForApiQuery } from '../../helper/date'

class ReportSubNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDate: this.props.lastDateState,
      lastDay: this.props.lastDayState,
      beforeDate: this.props.beforeDateState,
      beforeDay: this.props.beforeDayState,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { date, day } = nextProps
    if (
      this.props.lastDateState !==
      nextProps.lastDateState
    ) {
      this.setState({
        lastDate: nextProps.lastDateState,
        lastday: nextProps.lastDayState,
        beforeDate: nextProps.beforeDateState,
        beforeDay: nextProps.beforeDayState,
      })
    }
  }

  handleDateToPrevious = () => {
    this.props.moveToPrevDate(this.state.lastDate)
    // .then(date => {
    //   const queryDate = dateStringForApiQuery(
    //     new Date(date).toLocaleDateString(),
    //   )
    //   // get
    // })
  }

  handleDateToNext = () => {
    this.props.moveToNextDate(this.state.lastDate)
    // .then(date => {
    //   const queryDate = dateStringForApiQuery(
    //     new Date(date).toLocaleDateString(),
    //   )
    //   // get
    // })
  }

  render() {
    return (
      <div className="report">
        <nav className="report-submenu">
          <Icon
            name="chevron left"
            style={{ cursor: 'pointer' }}
            onClick={this.handleDateToPrevious}
          />
          <span className="report-date">
            {this.state.beforeDate}
            <span className="report-day">
              {' '}
              {this.state.beforeDay}
            </span>
          </span>
          -
          <span className="report-date">
            {this.state.lastDate}
            <span className="report-day">
              {' '}
              {this.state.lastDay}
            </span>
          </span>
          <Icon
            name="chevron right"
            style={{ cursor: 'pointer' }}
            onClick={this.handleDateToNext}
          />
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lastDateState: state.today.date,
    lastDayState: state.today.day,
    beforeDateState: state.today.beforeDate,
    beforeDayState: state.today.beforeDay,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveToPrevDate: targetDate =>
      dispatch(moveToPrevDate(targetDate)),
    moveToNextDate: targetDate =>
      dispatch(moveToNextDate(targetDate)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportSubNav)
