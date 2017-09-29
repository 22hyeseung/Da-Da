import React, { Component } from 'react'
import Header from '../../components/Header'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui container">
          Hi here is HomePage
        </div>
      </div>
    )
  }
}

export default HomePage
