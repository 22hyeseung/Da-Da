import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import TopSearchBar from './ResultSearchBar'
import ResultBox from './ResultList'
import './Result.css'
import {
  resultWrapper,
  container,
} from './StyledResult'
import { connect } from 'react-redux'
import { getRecipeSearch } from '../../../actions/recipe'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEmpty: true,
      loading: true,
      searchText: this.props.match.params.sc,
    }
    this.updateSearchText = this.updateSearchText.bind(this)
  }

  componentWillMount() {
    this.props.getRecipeSearch(this.state.searchText)
  }

  updateSearchText(searchText) {
    this.setState({ searchText })
  }

  render() {
    const {
      isEmpty,
      loading,
      searchText,
    } = this.state

    return (
      <div style={container}>
        <Navigation />
        <div style={resultWrapper} />
        <TopSearchBar updateSearchText={this.updateSearchText} />
        <ResultBox isEmpty={isEmpty} loading={loading} searchText={searchText} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    recipeList: state.recipeList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecipeSearch: searchText =>
      dispatch(getRecipeSearch(searchText)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult)
