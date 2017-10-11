import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import TopSearchBar from './ResultSearchBar'
import ResultBox from './ResultList'
import { resultWrapper } from './StyledResult'

class SearchResult extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div style={resultWrapper} />
        <TopSearchBar />
        <ResultBox />
      </div>
    )
  }
}

export default SearchResult
