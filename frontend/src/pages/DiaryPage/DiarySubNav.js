import React from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Segment, Icon } from 'semantic-ui-react'
import {
  calorieGoal,
  iconSet,
} from './StyledDiarySubNav'
import './Diary.css'

const DiarySubNav = props => {
  return (
    <div>
      <nav className="diary-submenu">
        <Icon name="chevron left" />
        <span className="diary-date">
          {props.date}
          <span className="diary-day">
            {props.day}
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
            100
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

const mapStateToProps = state => {
  return {
    date: state.today.date,
    day: state.today.day,
  }
}

export default connect(mapStateToProps, null)(
  DiarySubNav,
)
