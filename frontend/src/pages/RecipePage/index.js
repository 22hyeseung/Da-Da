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
    console.log(this.props.match.params.id, '<< [ this.props.match.params.id ]');
    this.props.getRecipe(this.props.match.params.id)
  }

  render() {
    return (
      <div style={styled.container}>
        <div style={{
          ...styled.topContainer,
          backgroundImage: `url(//s3.ap-northeast-2.amazonaws.com/dada-s3-file/recipe/${this.props.recipeContent.recipe_id}.jpg)`,
        }}>
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
    recipeContent: state.recipe.recipeContent,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: id =>
      dispatch(getRecipe(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipePage)
