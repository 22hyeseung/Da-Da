import React from 'react'
import editIcon from '../../static/img/diary-review_w.svg'
import fitnessIconDefault from '../../static/img/diary-fitness_default.svg'
import fitnessIconWhite from '../../static/img/diary-fitness_w.svg'
import foodIconDefault from '../../static/img/diary-food_default.svg'
import foodIconWhite from '../../static/img/diary-food_w.svg'
import reviewIconDefault from '../../static/img/diary-review_default.svg'
import reviewIconWhite from '../../static/img/diary-review_w.svg'

export const calorieGoal = {
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
}

export const defaultTabStyle = {
  justifyContent: 'flex-start',
}

export const activeTabStyle = {
  ...defaultTabStyle,
  backgroundImage:
    'linear-gradient(263deg, #485563, #29323c)',
}

export const defaultFontStyle = {
  fontWeight: '100',
  color: '#16325c',
}

export const activeFontStyle = {
  ...defaultFontStyle,
  color: '#fff',
}

export const iconSet = {
  editIcon,
  foodIcon: {
    default: foodIconDefault,
    white: foodIconWhite,
  },
  fitnessIcon: {
    default: fitnessIconDefault,
    white: fitnessIconWhite,
  },
  reviewIcon: {
    default: reviewIconDefault,
    white: reviewIconWhite,
  },
}
