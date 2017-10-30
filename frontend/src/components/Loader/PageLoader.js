import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import './pageLoader.css'
// 리덕스 액션
import { getCommentFromDB } from '../../actions/review'
// helper: 날짜 함수
import {
  dateStringForApiQuery,
  getDateNDaysBefore,
  dateTime,
} from '../../helper/date'

class PageLoader extends Component {
  constructor(props) {
    super(props)
  }

  // 어제 날짜 구하는 함수
  getYesterday() {
    // YYYY. MM. DD -> YYYYMMDD
    return dateStringForApiQuery(
      getDateNDaysBefore(
        // 1일전 Date형식의 날짜
        dateTime,
        1,
      ).toLocaleDateString(), // date -> string으로 변환
    )
  }

  componentWillMount() {
    this.props.getCommentFromDB(
      this.getYesterday(),
    )
  }

  getYesterDayComment() {
    const comment = this.props.commentSaved
      .day_log_regret
    return comment ? comment : '오늘도 어제처럼 완벽한 하루를!'
  }

  render() {
    return (
      <div className="loader-body">
        <div className="loader-container">
          <span className="loader-comment">
            {this.getYesterDayComment()}
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
    commentSaved: state.comment.commentSaved,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCommentFromDB: date =>
      dispatch(getCommentFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageLoader)
