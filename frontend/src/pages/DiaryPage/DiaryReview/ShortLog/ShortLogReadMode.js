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

// 리덕스 액션
import { changeModeShort } from '../../../../actions/review'

class ShortLogReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
            onClick={() =>
              this.props.changeMode(
                this.props.isPostMode,
              )}
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
          onClick={() =>
            this.props.changeMode(
              this.props.isPostMode,
            )}
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
    isPostMode: state.shortLog.isPostMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMode: isPostMode =>
      dispatch(changeModeShort(isPostMode)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShortLogReadMode)
