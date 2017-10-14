import React from 'react'
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'
import { Segment } from 'semantic-ui-react'
import * as Style from './StyledDiarySubNav'
import './Diary.css'

const DiarySubNav = () => {
  return (
    <div>
      <nav className="diary-submenu">
        <MdKeyboardArrowLeft />
        <span className="diary-date">
          2017.10.10.
          <span className="diary-day">월</span>
        </span>
        <MdKeyboardArrowRight />
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

export default DiarySubNav
