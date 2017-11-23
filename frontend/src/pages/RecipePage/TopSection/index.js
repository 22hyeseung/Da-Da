import React from 'react'
import { connect } from 'react-redux'
import { topContainer } from '../StyledRecipe'
import RecipeTitleBox from './RecipeTitleBox'

const TopContainer = props => {
  return (
    <div
      style={{
        ...topContainer,
        backgroundImage: `url(//s3.ap-northeast-2.amazonaws.com/dada-s3-file/recipe/${
          props.recipeContent.recipe_id
        }.jpg)`,
      }}
    >
      <RecipeTitleBox />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipeContent: state.recipe.recipeContent,
  }
}

export default connect(mapStateToProps, null)(
  TopContainer,
)
