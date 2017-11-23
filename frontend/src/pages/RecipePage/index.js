import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styled from './StyledRecipe'
// 컴포넌트
import Navigation from '../../components/Navigation'
import ComponentLoader from '../../components/Loader/ComponentLoader'
import RecipeTitleBox from './RecipeTitleBox'
import BottomSection from './BottomSection'
// 리덕스 액션
import { getRecipe } from '../../actions/recipe'

class RecipePage extends Component {
  componentDidMount() {
    this.props.getRecipe(
      this.props.match.params.id,
    )
  }

  render() {
    if (this.props.isLoading) {
      return <ComponentLoader />
    }
    return (
      <div style={styled.container}>
        <div
          style={{
            ...styled.topContainer,
            backgroundImage: `url(//s3.ap-northeast-2.amazonaws.com/dada-s3-file/recipe/${this
              .props.recipeContent
              .recipe_id}.jpg)`,
          }}
        >
          <div
            style={styled.navigationBackground}
          >
            <div style={styled.navigationGrid}>
              <Navigation color="#fff" />
            </div>
          </div>
          <RecipeTitleBox />
        </div>
        <BottomSection />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipeContent: state.recipe.recipeContent,
    isLoading: state.recipe.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipe: id => dispatch(getRecipe(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipePage)
