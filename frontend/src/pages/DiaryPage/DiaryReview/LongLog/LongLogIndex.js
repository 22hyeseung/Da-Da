import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Header,
  Dimmer,
  Message,
} from 'semantic-ui-react'
import { longBox } from '../StyledDiaryReview'

// 컴포넌트
import ComponentLoader from '../../../../components/Loader/ComponentLoader'
import LongLogReadMode from './LongLogReadMode'
import LongLogWriteMode from './LongLogWriteMode'

// 리덕스 액션 생성자
import {
  getLongLogFromDB,
  postLongLogToDB,
} from '../../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

class DiaryReviewLongInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: this.props.state,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  componentWillMount() {
    this.props.getLongLogFromDB(this.state.date)
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
      longLogSaved,
      isEditorMode,
      errorState,
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
      <div style={longBox}>
        <Header as="h5">오늘의 일기</Header>
        {/* 이미 작성한 로그가 있는 지 확인 */}
        {longLogSaved.day_log_comment ? (
          // 작성한 로그가 이미 있으면
          !isEditorMode ? (
            // 기본 화면: 읽기 모드
            <LongLogReadMode />
          ) : (
            // 수정 시 화면: 쓰기 모드
            <LongLogWriteMode />
          )
        ) : (
          // 오늘 작성한 로그가 없으면
          // 기본 화면: 쓰기 모드
          <LongLogWriteMode />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    longLogSaved: state.longLog.longLogSaved,
    dateState: state.today.date,
    isEditorMode: state.longLog.isEditorMode,
    errorState: state.longLog.errorState,
    isLoading: state.longLog.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLongLogFromDB: date =>
      dispatch(getLongLogFromDB(date)),
    postLongLogToDB: requestBody =>
      dispatch(postLongLogToDB(requestBody)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryReviewLongInput)
