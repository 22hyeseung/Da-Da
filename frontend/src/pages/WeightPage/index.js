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
      <Grid
        columns="equal"
        style={{ margin: '0px' }}
      >
        <Grid.Row stretched>
          <Grid.Column style={{ padding: '0px' }}>
            <WeightView />
            <WeightGraph />
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{
              padding: '0px 0px 0px 7px',
            }}
          >
            <WeightDaily />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default WeightPage
