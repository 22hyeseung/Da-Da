import React from 'react'
import { Segment } from 'semantic-ui-react'
import Progress from './Progress'
import CurrentWeight from './CurrentWeight'

const DashBoard = () => {
  return (
    <div>
      <Segment
        style={{
          padding: '35px 35px',
          boxShadow: 'none',
          border: '1px solid #D8DDE6',
        }}
      >
        <CurrentWeight />
        <Progress />
      </Segment>
    </div>
  )
}

export default DashBoard
