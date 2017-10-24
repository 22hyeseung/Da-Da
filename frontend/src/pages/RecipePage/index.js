import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styled from './StyledRecipe'
import Navigation from '../../components/Navigation'
import RecipeTitleBox from './RecipeTitleBox'
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'
import { getRecipe } from '../../actions/recipe'
import rootApi from '../../config'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeResult: [],
      isEmpty: true,
    }
  }

  componentWillMount() {
    this.props.getRecipe()
  }

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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipeResult: state.recipe,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: () =>
      dispatch(getRecipe()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipePage)
