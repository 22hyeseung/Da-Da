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
  getCaloriesForAWeekFromDB,
  getNutritionFactsForAWeekFromDB,
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

  // 바뀐 날짜에 해당하는 데이터 전부 다시 get
  getAgainAfterChangeDate = (
    startDate,
    endDate,
  ) => {
    // 차트 데이터 다시 get
    this.props.getCaloriesForAWeekFromDB(
      startDate,
      endDate,
    )
    this.props.getNutritionFactsForAWeekFromDB(
      startDate,
      endDate,
    )
    // summary 데이터 다시 get
    this.props.getKcalSummaryFromDB(
      startDate,
      endDate,
    )
    this.props.getNutritionSummaryFromDB(
      startDate,
      endDate,
    )
  }

  // 전날로 이동할 때
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
        // 바뀐 날짜에 해당하는 데이터 전부 다시 get
        this.getAgainAfterChangeDate(
          queryPrevBefore,
          queryPrev,
        )
      })
  }

  // 다음 날로 이동할 때
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
        // 바뀐 날짜에 해당하는 데이터 전부 다시 get
        this.getAgainAfterChangeDate(
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
          startDate,
          endDate,
        ),
      ), // 칼로리 차트 관련 데이터 불러오는 액션
    getCaloriesForAWeekFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getCaloriesForAWeekFromDB(
          startDate,
          endDate,
        ),
      ),
    getNutritionFactsForAWeekFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getNutritionFactsForAWeekFromDB(
          startDate,
          endDate,
        ),
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportSubNav)
