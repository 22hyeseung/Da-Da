import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class WeightSummary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Segment
          style={{
            border: 'none',
            boxShadow:
              '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
          }}
        />
      </div>
    )
  }
}

export default WeightSummary
