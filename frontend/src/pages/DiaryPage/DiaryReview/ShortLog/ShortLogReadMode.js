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
import {
  changeModeShort,
  deleteShortLogOfDB,
} from '../../../../actions/review'

class ShortLogReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteLogAndChangeToWriteMode(id) {
    this.props.deleteShortLogOfDB(id)
  }

  render() {
    const {
      shortLogSaved,
      changeMode,
      isPostMode,
    } = this.props
    return (
      <div>
        <Header
          as="h4"
          style={{ marginBottom: '24px' }}
        >
          오늘의 반성 일기 ( 30자 내외 )
          {/* 수정 버튼 */}
          <Button
            style={{
              ...buttonIcon,
              marginLeft: '16px',
            }}
            onClick={() => changeMode(isPostMode)}
          >
            <Icon name="pencil" />
          </Button>
          {/* 삭제 버튼 */}
          <Button
            style={buttonIcon}
            onClick={() =>
              this.deleteLogAndChangeToWriteMode(
                shortLogSaved.day_log_id,
              )}
          >
            <Icon name="trash outline" />
          </Button>
        </Header>
        <div
          className="savedShortLog"
          onClick={() => changeMode(isPostMode)}
        >
          {shortLogSaved.day_log_regret}
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
    deleteShortLogOfDB: id =>
      dispatch(deleteShortLogOfDB(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShortLogReadMode)
