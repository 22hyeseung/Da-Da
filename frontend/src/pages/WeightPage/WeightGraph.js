import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import { Segment } from 'semantic-ui-react'
import Graph from '../../static/img/weight-graph.svg'

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
          <img src={Graph} />
        </Segment>
      </div>
    )
  }
}

export default WeightGraph
