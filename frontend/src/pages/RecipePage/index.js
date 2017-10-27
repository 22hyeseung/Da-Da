import React, { Component } from 'react'
import * as styled from './StyledRecipe'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import RecipeTitleBox from './RecipeTitleBox'
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'

class RecipePage extends Component {
  render() {
    return (
      <div style={styled.container}>
        <div style={styled.topContainer}>
          <div
            style={styled.navigationBackground}
          >
            <div style={styled.navigationGrid}>
              <Navigation
                inverted="true"
                color="#fff"
              />
            </div>
          </div>
          <RecipeTitleBox />
        </div>
        <div style={styled.bottomContainer}>
          <IngredientBox />
          <CookingProcess />
        </div>
        <Footer />
      </div>
    )
  }
}

export default RecipePage
