import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import {
  Segment,
  Icon,
  Input,
  Button,
} from 'semantic-ui-react'
import {
  calorieGoal,
  iconSet,
  kcalInput,
} from './StyledDiaryCommon'
import './Diary.css'
// 리덕스 액션생성자
import { getUserInfo } from '../../actions/auth.js'
import {
  getGoalKcal,
  postGoalKcal,
} from '../../actions/diaryKcal'
import {
  moveToPrevDate,
  moveToNextDate,
} from '../../actions/setDate'
import { getFoodLogsFromDB } from '../../actions/diaryFood'
import { getFoodSummaryFromDB } from '../../actions/getFoodSummary'
import { getFitnessLogsFromDB } from '../../actions/diaryFitness'
import { getCommentFromDB } from '../../actions/review'
import { getArticleFromDB } from '../../actions/review'

// helper: 오늘 날짜
import {
  dateDotToDateType,
  dateStringForApiQuery,
} from '../../helper/date'

class DiarySubNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPostMode: false,
      inputGoalKcal: null,
      date: this.props.dateState,
      day: this.props.dayState,
    }
  }

  componentWillMount() {
    const { date, day } = this.state
    this.props.getGoalKcal(
      dateStringForApiQuery(date),
    )
  }

  componentWillReceiveProps(nextProps) {
    const { date, day } = nextProps
    if (
      this.props.dateState !== nextProps.dateState
    ) {
      this.setState({
        date: nextProps.dateState,
        day: nextProps.dayState,
      })
    }
  }

  createRequestAndPostGoalToDB = () => {
    this.changeMode()
    const {
      isPostMode,
      inputGoalKcal,
      date,
    } = this.state

    if (isPostMode && inputGoalKcal) {
      const requestBody = {
        goal_kcal: inputGoalKcal,
        date: dateStringForApiQuery(date),
      }
      this.props.postGoalKcal(requestBody)
    }

    this.changeMode()
  }

  changeMode = () => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
  }

  handleGoalKcalChange = e => {
    if (e.target.value.length > 6) {
      return false
    }
    const value = e.target.value.replace(
      /[^0-9]/g,
      '',
    )
    this.setState({ inputGoalKcal: value })
  }

  handleGoalKcalKey = e => {
    if (e.keyCode === 13) {
      this.createRequestAndPostGoalToDB()
    }
  }

  handleDateToPrevious = () => {
    this.props
      .moveToPrevDate(this.state.date)
      .then(param => {
        const queryDate = dateStringForApiQuery(
          param.prev.toLocaleDateString(),
        )
        this.props.getFoodLogsFromDB(queryDate)
        this.props.getFoodSummaryFromDB(queryDate)
        this.props.getFitnessLogsFromDB(queryDate)
        this.props.getCommentFromDB(queryDate)
        this.props.getArticleFromDB(queryDate)
      })
  }

  handleDateToNext = () => {
    this.props
      .moveToNextDate(this.state.date)
      .then(param => {
        const queryDate = dateStringForApiQuery(
          param.next.toLocaleDateString(),
        )
        this.props.getFoodLogsFromDB(queryDate)
        this.props.getFoodSummaryFromDB(queryDate)
        this.props.getFitnessLogsFromDB(queryDate)
        this.props.getCommentFromDB(queryDate)
        this.props.getArticleFromDB(queryDate)
      })
  }

  render() {
    return (
      <div>
        <nav className="diary-submenu">
          <Icon
            name="chevron left"
            style={{ cursor: 'pointer' }}
            onClick={this.handleDateToPrevious}
          />
          <span className="diary-date">
            {this.state.date}
            <span className="diary-day">
              {' '}
              {this.state.day}
            </span>
          </span>
          <Icon
            name="chevron right"
            style={{ cursor: 'pointer' }}
            onClick={this.handleDateToNext}
          />
        </nav>
        <Segment style={calorieGoal}>
          <span className="diary-food-goal-label">
            목표 칼로리
          </span>
          <div>
            {this.state.isPostMode ? (
              <Input
                className="diary-food-goal-label-input"
                style={kcalInput}
                value={this.state.inputGoalKcal}
                onChange={
                  this.handleGoalKcalChange
                }
                onKeyDown={this.handleGoalKcalKey}
                size="mini"
              />
            ) : (
              <span className="diary-food-goal-kcal">
                {this.props.goalKcal
                  ? this.props.goalKcal
                  : this.props.defaultGoalCalorie}
              </span>
            )}
            <span className="diary-food-goal-unit">
              kcal
            </span>
            <img
              src={iconSet.editIcon}
              className="diary-food-goal-edit"
              alt="클릭하면 목표칼로리를 수정할 수 있습니다"
              onClick={
                this.createRequestAndPostGoalToDB
              }
            />
          </div>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dateState: state.today.date,
    dayState: state.today.day,
    goalKcal: state.goalKcal.kcal,
    defaultGoalCalorie:
      state.caloriesChart.defaultGoalCalorie,
  }
}

const mapDispatchtoProps = dispatch => ({
  getGoalKcal: date =>
    dispatch(getGoalKcal(date)),
  postGoalKcal: param =>
    dispatch(postGoalKcal(param)),
  moveToPrevDate: targetDate =>
    dispatch(moveToPrevDate(targetDate)),
  moveToNextDate: targetDate =>
    dispatch(moveToNextDate(targetDate)),
  getFoodLogsFromDB: date =>
    dispatch(getFoodLogsFromDB(date)),
  getFoodSummaryFromDB: date =>
    dispatch(getFoodSummaryFromDB(date)),
  getFitnessLogsFromDB: date =>
    dispatch(getFitnessLogsFromDB(date)),
  getCommentFromDB: date =>
    dispatch(getCommentFromDB(date)),
  getArticleFromDB: date =>
    dispatch(getArticleFromDB(date)),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(DiarySubNav)
