import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import SearchBar from './SearchBar'
import { container } from './StyledSearch'

class SearchPage extends Component {
  render() {
    return (
      <div style={container}>
        <Navigation
          inverted="true"
          color="#fff"
        />
        <SearchBar />
      </div>
    )
  }
}

export default SearchPage
