import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import bgImg from '../../static/img/search_bg.jpg'
import './Search.css'

class SearchPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          color: '#fff',
          height: '780px',
        }}>
        <Navigation
          inverted="true"
          color="#fff"
        />
        <div>SearchPage</div>
      </div>
    )
  }
}

export default SearchPage
