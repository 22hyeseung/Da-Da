import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Message,
  Dimmer,
} from 'semantic-ui-react'
import { shortBox } from '../StyledDiaryReview'

// 컴포넌트
import ShortLogWriteMode from './ShortLogWriteMode'
import ShortLogReadMode from './ShortLogReadMode'
import ComponentLoader from '../../../../components/Loader/ComponentLoader'

// 리덕스 액션
import { getShortLogFromDB } from '../../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: this.props.state,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 다이어리 리뷰 페이지 첫 로드시 get.
  // db에 작성된 로그가 이미 있는지 확인하기 위함.
  // 데이터 유무에 따라 보여지는 화면이 다름. (읽기모드/쓰기모드)
  componentWillMount() {
    this.props.getShortLogFromDB(this.state.date)
    this.setState({ isLoading: true }, () =>
      this.fetchData(),
    )
  }

  // 로딩 화면 위해 2초 지연
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000)
  }

  render() {
    const {
      isPostMode,
      errorState,
      shortLogSaved,
    } = this.props

    // 시스템 에러 발생시
    if (errorState) {
      return (
        <Message negative>
          <Message.Header>
            죄송합니다. 예기치 못한 오류가 발생했어요. (◞‸◟；)
          </Message.Header>
          <p>잠시 후 다시 시도해 주세요. (; •͈́ ༚ •͈̀ )</p>
        </Message>
      )
    }

    // 로딩 중 (요청 후 응답이 오지 않은 상태)
    if (this.state.isLoading) {
      return (
        <Dimmer active inverted>
          <ComponentLoader />
        </Dimmer>
      )
    }

    return (
      <div style={shortBox}>
        {/* 이미 작성한 로그가 있는 지 확인 */}
        {shortLogSaved.day_log_regret ? (
          // 작성한 로그가 이미 있으면
          isPostMode ? (
            // 수정 시 화면: 쓰기 모드
            <ShortLogWriteMode />
          ) : (
            // 기본 화면: 읽기 모드
            <ShortLogReadMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          // 기본 화면: 쓰기 모드
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
    getShortLogFromDB: date =>
      dispatch(getShortLogFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(DiaryReviewShortInput)
