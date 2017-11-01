import React from 'react'
import { Segment } from 'semantic-ui-react'
import WeightChart from '../../components/Charts/WeightChart'

const WeightGraph = () => {
  return (
    <div>
      <Segment
        style={{
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <WeightChart />
      </Segment>
    </div>
  )
}

export default WeightGraph
