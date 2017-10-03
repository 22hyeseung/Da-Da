import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import WeightProgress from './WeightProgress'
import WeightCurrentValue from './WeightCurrentValue'

class WeightView extends Component {
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
          <WeightCurrentValue />
          <WeightProgress />
        </Segment>
      </div>
    )
  }
}

export default WeightView
