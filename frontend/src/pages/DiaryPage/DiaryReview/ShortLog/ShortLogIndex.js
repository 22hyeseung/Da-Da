import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import { Dimmer, Loader } from 'semantic-ui-react'
import { shortBox } from '../StyledDiaryReview'

// 컴포넌트
import ShortLogWriteMode from './ShortLogWriteMode'
import ShortLogReadMode from './ShortLogReadMode'

class DiaryReviewShortInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogExisted: false,
      isPostMode: true,
    }
  }

  // 읽기모드 <-> 쓰기모드 상태 변경
  changeMode = () => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
  }

  render() {
    const { isPostMode } = this.state
    const {
      errorState,
      isLoading,
      shortLogSaved,
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
        {isPostMode ? (
          <ShortLogWriteMode
            changeMode={this.changeMode}
          />
        ) : (
          <ShortLogReadMode
            changeMode={this.changeMode}
            shortLogSaved={
              shortLogSaved.day_log_regret
            }
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shortLogSaved: state.shortLog.shortLogSaved,
    isLoading: state.shortLog.isLoading,
    errorState: state.shortLog.errorState,
    dateState: state.today.date,
  }
}

export default connect(mapStateToProps, null)(
  DiaryReviewShortInput,
)
