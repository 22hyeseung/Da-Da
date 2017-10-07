import React from 'react'
import { Segment } from 'semantic-ui-react'
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left'
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'
import editIcon from '../../static/img/diary-review_w.svg'
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
      <Segment
        style={{
          width: '16%',
          position: 'absolute',
          top: '64px',
          right: '0px',
          padding: '7px 14px',
          margin: '0px',
          boxShadow: 'none',
          border: 'none',
          fontWeight: '100',
          color: '#fff',
          backgroundImage:
            'linear-gradient(216deg, #26d0ce, #1a2980)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
            src={editIcon}
            className="diary-food-goal-edit"
            alt="클릭하면 목표칼로리를 수정할 수 있습니다"
          />
        </div>
      </Segment>
    </div>
  )
}

export default DiarySubNav
