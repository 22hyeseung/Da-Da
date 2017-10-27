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

class SearchResult extends Component {
  render() {
    return (
      <div style={container}>
        <Navigation />
        <div style={resultWrapper} />
        <TopSearchBar />
        <ResultBox />
        {/* <Footer />  스타일 수정 후 추가 */}
      </div>
    )
  }
}

export default SearchResult
