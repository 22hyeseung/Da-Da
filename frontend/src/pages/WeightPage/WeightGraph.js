import React from 'react'
import { Segment } from 'semantic-ui-react'
import Graph from '../../static/img/weight-graph.svg'

const WeightGraph = () => {
  return (
    <div>
      <Segment
        style={{
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <img src={Graph} alt="그래프 넣을 공간입니다" />
      </Segment>
    </div>
  )
}

export default WeightGraph
