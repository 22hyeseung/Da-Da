import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import SearchBar from './SearchBar'
import bgImg from '../../static/img/search_bg.jpg'

const container = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  color: '#fff',
  width: '1439px',
  height: '780px',
}

class SearchPage extends Component {
  constructor(props) {
    super(props)
  }

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
