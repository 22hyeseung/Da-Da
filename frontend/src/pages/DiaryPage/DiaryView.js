import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import DiaryFood from './DiaryFood'
import DiaryFitness from './DiaryFitness'
import DiaryReview from './DiaryReview'

class DiaryView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/diary"
            component={DiaryFood}
          />
          <Route
            path="/diary/fitness"
            component={DiaryFitness}
          />
          <Route
            path="/diary/review"
            component={DiaryReview}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default DiaryView
