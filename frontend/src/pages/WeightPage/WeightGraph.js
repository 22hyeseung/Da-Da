import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import { Segment } from 'semantic-ui-react'

class WeightGraph extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Segment
          style={{
            boxShadow: 'none',
            border: 'none',
          }}
        >
          1
        </Segment>
      </div>
    )
  }
}

export default WeightGraph
