import React, { Component } from 'react'
import { bottomContainer } from '../StyledRecipe'
// components
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'

const BottomContainer = props => {
  return (
    <div style={bottomContainer}>
      <IngredientBox />
      <CookingProcess />
    </div>
  )
}

export default BottomContainer
