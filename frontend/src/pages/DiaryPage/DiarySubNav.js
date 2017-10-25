import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Segment, Icon, Input, Button } from 'semantic-ui-react'
import {
  calorieGoal,
  iconSet,
  kcalInput,
} from './StyledDiaryCommon'
import './Diary.css'
// 리덕스 액션생성자
import { getUserInfo } from '../../actions/auth.js'

// 리덕스 액션생성자
import {
  setTodayDate,
  setTodayDay,
} from '../../actions/setDate'

import { getGoalKcal, postGoalKcal } from '../../actions/diaryKcal'

// helper: 오늘 날짜
import {
  todaysDate,
  todaysDay,
  dateStringForApiQuery,
} from '../../helper/date'

class DiarySubNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goalKcal: null,
      isPostMode: false,
    }
  }

  changeMode = () => {
    if(this.state.isPostMode&& this.state.goalKcal){
      const param = {
        goal_kcal: this.state.goalKcal,
        date: dateStringForApiQuery(todaysDate),
      }

      this.props.postGoalKcal(param)
    }

    this.setState({
      goalKcal: this.props.goalKcal.kcal,
      isPostMode: !this.state.isPostMode,
    })
  }

  handleGoalKcalChange = e => {
    if(e.target.value.length > 6){
      return false
    }
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    this.setState({ goalKcal: e.target.value })
  }

  handleGoalKcalKey = e => {
    if(e.keyCode === 13){
      this.changeMode()
    }
  }

  componentWillMount() {
    this.props.setTodayDate(todaysDate)
    this.props.setTodayDay(todaysDay)
    this.props.getGoalKcal(dateStringForApiQuery(todaysDate))
  }

  render() {
    return (
      <div>
        <nav className="diary-submenu">
          <Icon name="chevron left" />
          <span className="diary-date">
            {this.props.dateState}
            <span className="diary-day">
              {' '}
              {this.props.dayState}
            </span>
          </span>
          <Icon name="chevron right" />
        </nav>
        <Segment style={calorieGoal}>
          <span className="diary-food-goal-label">
            목표 칼로리
          </span>
          <div>
            {this.state.isPostMode ? (
              <Input
                style={kcalInput}
                value={this.state.goalKcal}
                onChange={this.handleGoalKcalChange}
                onKeyDown={this.handleGoalKcalKey}
                size='mini'
              />
            ) : (
              <span className="diary-food-goal-kcal">
                {this.props.goalKcal.kcal}
              </span>
            )}
            <span className="diary-food-goal-unit">
              kcal
            </span>
            <img
              src={iconSet.editIcon}
              className="diary-food-goal-edit"
              alt="클릭하면 목표칼로리를 수정할 수 있습니다"
              onClick={this.changeMode}
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
    goalKcal: state.goalKcal,
  }
}

const mapDispatchtoProps = dispatch => ({
  setTodayDate: date =>
    dispatch(setTodayDate(date)),
  setTodayDay: day => dispatch(setTodayDay(day)),
  getGoalKcal: date =>
    dispatch(getGoalKcal(date)),
  postGoalKcal: param =>
    dispatch(postGoalKcal(param)),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(DiarySubNav)
