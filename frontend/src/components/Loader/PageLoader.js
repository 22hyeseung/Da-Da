import React, { Component } from 'react'
import './pageLoader.css'

import { connect } from 'react-redux'

// 리덕스 액션
import { getShortLogFromDB } from '../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../helper/date'

class PageLoader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 어제 날짜 구하는 함수
  getYesterday() {
    const yesterday = this.state.date * 1 - 1
    return yesterday + ''
  }

  componentWillMount() {
    this.props.getShortLogFromDB(
      this.getYesterday(),
    )
  }

  getYesterDayShortLog() {
    return this.props.shortLogSaved.day_log_regret
      ? this.props.shortLogSaved.day_log_regret
      : '오늘도 어제처럼 완벽한 하루를!'
  }

  render() {
    return (
      <div className="loader-body">
        <div className="loader-container">
          <span className="loader-shortLog">
            {this.getYesterDayShortLog()}
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

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getShortLogFromDB: date =>
      dispatch(getShortLogFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLoader)
