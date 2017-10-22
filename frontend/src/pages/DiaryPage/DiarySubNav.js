import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Segment, Icon } from 'semantic-ui-react'
import {
  calorieGoal,
  iconSet,
} from './StyledDiaryCommon'
import './Diary.css'
// 리덕스 액션생성자
import { getUserInfo } from '../../actions/auth.js'

// 리덕스 액션생성자
import {
  setTodayDate,
  setTodayDay,
} from '../../actions/setDate'

import { getTargetKcal } from '../../actions/diaryKcal'

// helper: 오늘 날짜
import {
  todaysDate,
  todaysDay,
} from '../../helper/date'

class DiarySubNav extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.setTodayDate(todaysDate)
    this.props.setTodayDay(todaysDay)
    this.props.getTargetKcal()
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
            <span className="diary-food-goal-kcal">
              {this.props.targetKcal.kcal}
            </span>
            <span className="diary-food-goal-unit">
              kcal
            </span>
            <img
              src={iconSet.editIcon}
              className="diary-food-goal-edit"
              alt="클릭하면 목표칼로리를 수정할 수 있습니다"
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
    targetKcal: state.targetKcal,
  }
}

const mapDispatchtoProps = dispatch => ({
  setTodayDate: date =>
    dispatch(setTodayDate(date)),
  setTodayDay: day => dispatch(setTodayDay(day)),
  getTargetKcal: date =>
    dispatch(getTargetKcal(date)),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(DiarySubNav)
