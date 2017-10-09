import React from 'react'
import Navigation from '../../components/Navigation'
import { Grid } from 'semantic-ui-react'
import WeightView from './WeightView'
import WeightGraph from './WeightGraph'
import WeightDaily from './WeightDaily'
import './Weight.css'

const WeightPage = () => {
  return (
    <div className="weight-grid">
      <Navigation />
      <div className="weight-grid-wrapper">
        <Grid.Column
          width={12}
          style={{ padding: '0px' }}
        >
          <WeightView />
          <WeightGraph />
        </Grid.Column>
        <Grid.Column
          stretched
          width={4}
          style={{
            padding: '0px 0px 0px 7px',
            width: '100%',
          }}
        >
          <WeightDaily />
        </Grid.Column>
      </div>
    </div>
  )
}

export default WeightPage
