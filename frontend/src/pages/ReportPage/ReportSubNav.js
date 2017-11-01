import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import './Report.css'

import {
  moveToPrevDate,
  moveToNextDate,
} from '../../actions/setDate'

import {
  getKcalSummaryFromDB,
  getNutritionSummaryFromDB,
} from '../../actions/reportAPIs'

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
    this.props
      .moveToPrevDate(this.state.lastDate)
      .then(param => {
        const queryPrev = dateStringForApiQuery(
          param.prev.toLocaleDateString(),
        )
        const queryPrevBefore = dateStringForApiQuery(
          param.prevBefore.toLocaleDateString(),
        )
        this.props.getKcalSummaryFromDB(
          queryPrevBefore,
          queryPrev,
        )
        this.props.getNutritionSummaryFromDB(
          queryPrevBefore,
          queryPrev,
        )
      })
  }

  handleDateToNext = () => {
    this.props
      .moveToNextDate(this.state.lastDate)
      .then(param => {
        const queryNext = dateStringForApiQuery(
          param.next.toLocaleDateString(),
        )
        const queryNextBefore = dateStringForApiQuery(
          param.nextBefore.toLocaleDateString(),
        )
        console.warn(queryNextBefore, queryNext)
        this.props.getKcalSummaryFromDB(
          queryNextBefore,
          queryNext,
        )
        this.props.getNutritionSummaryFromDB(
          queryNextBefore,
          queryNext,
        )
      })
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
    getKcalSummaryFromDB: (startDate, endDate) =>
      dispatch(
        getKcalSummaryFromDB(startDate, endDate),
      ),
    getNutritionSummaryFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getNutritionSummaryFromDB(
          (startDate, endDate),
        ),
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportSubNav)
