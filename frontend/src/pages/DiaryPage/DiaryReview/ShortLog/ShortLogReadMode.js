import React, { Component } from 'react'
import { connect } from 'react-redux'

//스타일링
import {
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'
import { buttonIcon } from '../StyledDiaryReview'
import '../diaryReview.css'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../../helper/date'

// 리덕스 액션
import {
  getShortLogFromDB,
  changeMode,
} from '../../../../actions/review'

class ShortLogReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  componentWillMount() {
    this.props.getShortLogFromDB(this.state.date)
  }

  render() {
    return (
      <div>
        <Header as="h5">
          오늘의 반성 일기 ( 30자 내외 )
          {/* 수정 버튼 */}
          <Button
            style={{
              ...buttonIcon,
              marginLeft: '16px',
            }}
            onClick={this.props.changeMode}
          >
            <Icon name="pencil" />
          </Button>
          {/* 삭제 버튼 */}
          <Button style={buttonIcon}>
            <Icon name="trash outline" />
          </Button>
        </Header>
        <div
          className="savedShortLog"
          onClick={this.props.changeMode}
        >
          {
            this.props.shortLogSaved
              .day_log_regret
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    dateState: state.today.date,
    isPostMode: state.shortLog.isPostMode,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    getShortLogFromDB: date =>
      dispatch(getShortLogFromDB(date)),
    changeMode: isPostMode =>
      dispatch(changeMode(isPostMode)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(ShortLogReadMode)
