import React, { Component } from 'react'
import * as styled from './StyledRecipe'
import Navigation from '../../components/Navigation'
import RecipeTitleBox from './RecipeTitleBox'
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'

class RecipePage extends Component {
  render() {
    return (
      <div style={styled.container}>
        <div style={styled.topContainer}>
          <div style={styled.navigationGrid}>
            <Navigation
              inverted="true"
              color="#fff"
              opacity="0.7"
              backgroundImage="linear-gradient(268deg, #485563, #29323c)"
            />
          </div>
          <RecipeTitleBox />
        </div>
        <div style={styled.bottomContainer}>
          <IngredientBox />
          <CookingProcess />
        </div>
      </div>
    )
  }
}

export default RecipePage
