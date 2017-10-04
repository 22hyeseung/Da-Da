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
        <Segment
          style={{
            padding: '35px 135px',
            boxShadow: 'none',
            border: '1px solid #D8DDE6',
          }}
        >
          <DiaryFood />
          <DiaryFitness />
          <DiaryReview />
        </Segment>
      </div>
    )
  }
}

export default DiaryView
