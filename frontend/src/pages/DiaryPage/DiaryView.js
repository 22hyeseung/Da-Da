import React, { Component } from 'react'
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
      <div>
        <DiaryFood />
        <DiaryFitness />
        <DiaryReview />
      </div>
    )
  }
}

export default DiaryView
