import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import TopSearchBar from './ResultSearchBar'
import ResultBox from './ResultList'
import './Result.css'
import {
  resultWrapper,
  container,
} from './StyledResult'

class SearchResult extends Component {
  render() {
    return (
      <div style={container}>
        <Navigation />
        <div style={resultWrapper} />
        <TopSearchBar />
        <ResultBox />
      </div>
    )
  }
}

export default SearchResult
