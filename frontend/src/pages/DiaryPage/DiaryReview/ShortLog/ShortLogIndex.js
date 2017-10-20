import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { Dimmer, Loader } from 'semantic-ui-react'
import { shortBox } from '../StyledDiaryReview'

// 컴포넌트
import ShortLogWriteMode from './ShortLogWriteMode'
import ShortLogReadMode from './ShortLogReadMode'

// 리덕스 액션
import {
  changeMode,
  getShortLogFromDB,
} from '../../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
      isLogExisted: this.props.shortLogSaved
        .day_log_regret,
    }
  }

  componentWillMount() {
    this.props.getShortLogFromDB(this.state.date)
  }
  // 읽기모드 <-> 쓰기모드 상태 변경
  // changeMode = () => {
  //   this.setState({
  //     isPostMode: !this.state.isPostMode,
  //   })
  // }
  // 작성한 로그가 존재하는지 확인
  isLogExisted = () => {
    console.log(
      this.props.shortLogSaved.day_log_regret,
    )
    // return this.props.shortLogSaved.day_log_regret
  }

  render() {
    const {
      isPostMode,
      errorState,
      isLoading,
      shortLogSaved,
      changeMode,
    } = this.props

    if (errorState) {
      return <h1>ERROR!</h1>
    }

    if (isLoading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      )
    }

    return (
      <div style={shortBox}>
        {this.props.shortLogSaved
          .day_log_regret ? (
          // 작성한 로그가 이미 있으면
          isPostMode ? (
            <ShortLogWriteMode />
          ) : (
            <ShortLogReadMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          <ShortLogWriteMode />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    dateState: state.today.date,
    isLoading: state.shortLog.isLoading,
    errorState: state.shortLog.errorState,
    isPostMode: state.shortLog.isPostMode,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    changeMode: isPostMode =>
      dispatch(changeMode(isPostMode)),
    getShortLogFromDB: date =>
      dispatch(getShortLogFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewShortInput)
