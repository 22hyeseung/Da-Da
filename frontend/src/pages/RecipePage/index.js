import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as styled from './StyledRecipe'
// 컴포넌트
import Container from '../../container/InvertedPageContainer'
import Footer from '../../components/Footer'
import ComponentLoader from '../../components/Loader/ComponentLoader'
import TopSection from './TopSection'
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
        <TopSection />
        <div style={styled.navigationBackground}>
          <Container />
        </div>
        <div
          style={{
            width: '1200px',
            margin: '0 auto',
          }}
        >
          <BottomSection />
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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
