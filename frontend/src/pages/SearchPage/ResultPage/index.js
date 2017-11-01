import React, { Component } from 'react'
import Navigation from '../../../components/Navigation'
import TopSearchBar from './ResultSearchBar'
import ResultBox from './ResultList'

const resultWrapper = {
  width: '1200px',
  display: 'flex',
  position: 'relative',
}

class SearchResult extends Component {
  constructor(props) {
    super(props)
  }

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
