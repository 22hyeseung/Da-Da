import React, { Component } from 'react'
import { connect } from 'react-redux'

//스타일링
import {
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'
import {
  savedContainer,
  buttonIcon,
} from '../StyledDiaryReview'
import '../diaryReview.css'

// 리덕스 액션
import {
  changeModeLong,
  deleteLongLogOfDB,
} from '../../../../actions/review'

class LongLogReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteLogAndChangeToWriteMode(id) {
    this.props.deleteLongLogOfDB(id)
    this.props.changeMode(this.props.isPostMode)
  }

  render() {
    const {
      longLogSaved,
      changeMode,
      isEditorMode,
    } = this.props

    return (
      <div>
        <Header as="h4">
          오늘의 일기
          {/* 수정 버튼 */}
          <Button
            style={{
              ...buttonIcon,
              marginLeft: '16px',
            }}
            onClick={() =>
              changeMode(isEditorMode)}
          >
            <Icon name="pencil" />
          </Button>
          {/* 삭제 버튼 */}
          <Button
            style={buttonIcon}
            onClick={() =>
              this.deleteLogAndChangeToWriteMode(
                longLogSaved.day_log_id,
              )}
          >
            <Icon name="trash outline" />
          </Button>
        </Header>
        <div
          className="savedLongLog"
          style={savedContainer}
          onClick={() => changeMode(isEditorMode)}
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                longLogSaved.day_log_comment,
            }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    longLogSaved: state.longLog.longLogSaved,
    isEditorMode: state.longLog.isEditorMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMode: isEditorMode =>
      dispatch(changeModeLong(isEditorMode)),
    deleteLongLogOfDB: id =>
      dispatch(deleteLongLogOfDB(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LongLogReadMode)
