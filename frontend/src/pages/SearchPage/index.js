import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import SearchBar from './SearchBar'
import {
  container,
  navGrid,
} from './StyledSearch'

class SearchPage extends Component {
  render() {
    return (
      <div style={container}>
        <div style={navGrid}>
          <Navigation
            inverted="true"
            color="#fff"
          />
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default SearchPage
