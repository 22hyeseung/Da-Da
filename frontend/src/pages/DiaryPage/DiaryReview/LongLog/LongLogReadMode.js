import React, { Component } from 'react'
import { connect } from 'react-redux'

//스타일링
import {
  Header,
  Button,
  Icon,
} from 'semantic-ui-react'
import { savedContainer } from '../StyledDiaryReview'
import '../diaryReview.css'

// 리덕스 액션
import { changeModeLong } from '../../../../actions/review'

class LongLogReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      longLogSaved,
      isEditorMode,
    } = this.props

    return (
      <div style={savedContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: longLogSaved.day_log_comment,
          }}
        />
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LongLogReadMode)
