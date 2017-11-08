import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일
import {
  Input,
  Icon,
  Button,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'
import {
  submitBtn,
  cancelBtn,
} from '../StyledDiary'

// 아이콘
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'

// 액션
import { postFitnessToDB } from '../../../actions/diaryFitness'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class FitnessSelectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalKcal: '-',
      inputTime: '',
      disabled: true,
      error: false,
      loading: false,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  componentDidMount() {
    if (this.props.isSelected) {
      this.textInput.focus()
    }
  }

  // 먹은 양 받기
  handleAmount = e => {
    const finalKcal =
      this.props.fitnessResult
        .exercise_burn_kcal * e.target.value
    this.setState({
      finalKcal: finalKcal.toFixed(1),
      inputTime: e.target.value,
    })
    // 양 입력 안했을 경우 버튼 비활성화
    if (e.target.value > 0)
      this.setState({
        disabled: false,
        error: false,
      })
  }

  // keydown 이벤트
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createPayloadAndPostToDB()
    }
  }

  postDelay = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
      this.props.toggleSearchMode()
    }, 2000)
  }

  // payload 생성
  createPayloadAndPostToDB = () => {
    if (
      !this.state.inputTime ||
      this.state.inputTime < 1
    ) {
      return this.setState({
        disabled: true,
        error: true,
      })
    }
    this.props.postFitnessToDB({
      date: this.state.date,
      exercise_id: this.props.fitnessResult
        .exercise_id,
      kcal: this.state.finalKcal,
      burn_minute: this.state.inputTime,
    })
    this.props.toggleSearchMode()
  }

  render() {
    const details = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="diary-food-search-label-result-title">
          {this.props.fitnessResult.exercise_name}
        </span>
        <span className="diary-food-search-label-result-kcal">
          {
            this.props.fitnessResult
              .exercise_burn_kcal
          }{' '}
          kcal
        </span>
        <div className="diary-food-search-label-result-input">
          <img
            src={multiplyIcon}
            className="diary-food-calculateIcon"
            alt="곱하기 모양의 아이콘입니다."
          />
          <Input
            ref={input =>
              (this.textInput = input)}
            placeholder="얼마나 운동하셨나요?"
            onChange={e => this.handleAmount(e)}
            style={{ width: '177px' }}
            type="number"
            onKeyDown={this.handleKeyPress}
            error={this.state.error}
          />
          <img
            src={returnIcon}
            className="diary-food-calculateIcon"
            alt="= 모양의 아이콘입니다."
          />
          <div className="diary-food-search-label-result-wrapper">
            <span className="diary-food-search-label-result-calculateKcal">
              {this.state.finalKcal}
            </span>
            <span className="diary-food-search-label-result-unit">
              kcal
            </span>
          </div>
        </div>
      </div>
    )

    const blank = (
      <span className="diary-food-search-label-result-title">
        <Icon color="teal" name="check" />
        검색 후 운동 종류를 선택하세요.
      </span>
    )

    return (
      <div className="diary-food-search-label">
        <div className="diary-food-search-label-result">
          {this.props.isSelected
            ? details
            : blank}
        </div>
        <div style={Style.buttonWrap}>
          <Button
            basic
            style={cancelBtn}
            onClick={this.props.toggleSearchMode}
          >
            취소
          </Button>
          <Button
            style={submitBtn}
            onClick={
              this.createPayloadAndPostToDB
            }
            loading={this.state.loading}
            disabled={this.state.disabled}
          >
            등록
          </Button>
        </div>
      </div>
    )
  }
}

FitnessSelectDetails.defaultProps = {
  fitnessResult: {
    exercise_id: '',
    exercise_burn_kcal: '',
    exercise_name: '',
  },
}
const mapStateToProps = state => {
  return {
    dateState: state.today.date,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postFitnessToDB: payload =>
      dispatch(postFitnessToDB(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FitnessSelectDetails)
