import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styled from './StyledRecipe'
import Navigation from '../../components/Navigation'
import RecipeTitleBox from './RecipeTitleBox'
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'
import ComponentLoader from '../../components/Loader/ComponentLoader'
import { getRecipe } from '../../actions/recipe'

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeResult: [],
      isEmpty: true,
      recipeAmount: 1,
      loading: false,
    }
    this.updateRecipeAmount = this.updateRecipeAmount.bind(this)
  }

  componentWillMount() {
    this.props.getRecipe(this.props.match.params.id)
    this.setState({
      recipeAmount: this.props.recipeContent,
      loading: true,
    })

    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1500)
  }

  updateRecipeAmount(recipeAmount) {
    this.setState({ recipeAmount })
  }

  render() {
    if (this.state.loading) {
      return <ComponentLoader posiStyle={{top: '200px'}} />
    }

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
          <IngredientBox
            recipeAmount={this.state.recipeAmount}
            updateRecipeAmount={this.updateRecipeAmount}
          />
          <CookingProcess
            recipeAmount={this.state.recipeAmount}
          />
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
