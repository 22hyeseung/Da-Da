import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Segment,
  Message,
} from 'semantic-ui-react'
import { reviewBox } from './StyledDiaryReview'

// 컴포넌트
import ComponentLoader from '../../../components/Loader/ComponentLoader'
import Comment from './Comment'
import Article from './Article'
import DiarySubHeader from '../DiarySubHeader'

// 리덕스 액션
import { getCommentFromDB } from '../../../actions/review'
import { getArticleFromDB } from '../../../actions/review'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 둘 중 하나라도 error이면 true
      errorState:
        this.props.errorStateComment ||
        this.props.errorStateArticle,
      // 둘 중 하나라도 loading이면 true
      isLoading:
        this.props.isLoadingComment ||
        this.props.isLoadingArticle,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  // 다이어리 리뷰 페이지 첫 로드시 get.
  // db에 작성된 로그가 이미 있는지 확인하기 위함.
  // 데이터 유무에 따라 보여지는 화면이 다름. (읽기모드/쓰기모드)
  componentWillMount() {
    this.props.getArticleFromDB(this.state.date)
    this.props.getCommentFromDB(this.state.date)
    this.setState({ isLoading: true }, () =>
      this.fetchData(),
    )
  }

  // 로딩 화면 위해 1.5초 지연
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 1500)
  }

  render() {
    // 시스템 에러 발생시
    if (this.state.errorState) {
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
      return <ComponentLoader />
    }

    return (
      <div>
        <Segment style={reviewBox}>
          {/* title */}
          <DiarySubHeader
            tabNameEN="REVIEW"
            tabNameKR="일기"
            icon="reviewIcon"
          />
          {/* 오늘의 반성일기 */}
          <Comment />
          {/* 오늘의 일기*/}
          <Article />
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
    errorStateComment: state.comment.errorState,
    errorStateArticle: state.article.errorState,
    isLoadingComment: state.comment.isLoading,
    isLoadingArticle: state.article.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCommentFromDB: date =>
      dispatch(getCommentFromDB(date)),
    getArticleFromDB: date =>
      dispatch(getArticleFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryReview)
