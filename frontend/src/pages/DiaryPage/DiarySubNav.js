import React from 'react'
import { connect } from 'react-redux'
import { Segment, Icon } from 'semantic-ui-react'
import * as Style from './StyledDiarySubNav'
import './Diary.css'

const DiarySubNav = () => {
  return (
    <div>
      <nav className="diary-submenu">
        <Icon name="chevron left" />
        <span className="diary-date">
          date
          <span className="diary-day"> day</span>
        </span>
        <Icon name="chevron right" />
      </nav>
      <Segment style={Style.calorieGoal}>
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
            src={Style.iconSet.editIcon}
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
