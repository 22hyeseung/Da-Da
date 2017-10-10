import React from 'react'
import { Segment } from 'semantic-ui-react'
import WeightProgress from './WeightProgress'
import WeightCurrentValue from './WeightCurrentValue'

const WeightView = () => {
  return (
    <div>
      <Segment
        style={{
          padding: '35px 35px',
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

export default WeightView
