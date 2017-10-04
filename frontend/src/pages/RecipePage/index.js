import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import bgImg from '../../static/img/recipe_img.jpg'

class RecipePage extends Component {
  render() {
    return (
      <div
        style={{
          width: '1440px',
          height: '464px',
          backgroundImage: `url(${bgImg})`,
          backgroundSize: '1550px',
          backgroundPosition: 'left center',
        }}>
        <Navigation
          inverted="true"
          color="#fff"
          opacity="0.7"
          backgroundImage="linear-gradient(268deg, #485563, #29323c)"
        />
        <div>RecipePage</div>
      </div>
    )
  }
}

export default RecipePage
