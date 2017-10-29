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
  changeModeComment,
  deleteCommentOfDB,
} from '../../../../actions/review'

class ReadMode extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  deleteLogAndChangeToWriteMode(id) {
    this.props.deleteCommentOfDB(id)
    this.props.changeMode(this.props.isPostMode)
  }

  render() {
    const {
      commentSaved,
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
                commentSaved.day_log_id,
              )}
          >
            <Icon name="trash outline" />
          </Button>
        </Header>
        <div
          className="savedComment"
          onClick={() => changeMode(isPostMode)}
        >
          {commentSaved.day_log_regret}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    commentSaved: state.comment.commentSaved,
    isPostMode: state.comment.isPostMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMode: isPostMode =>
      dispatch(changeModeComment(isPostMode)),
    deleteCommentOfDB: id =>
      dispatch(deleteCommentOfDB(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadMode)
