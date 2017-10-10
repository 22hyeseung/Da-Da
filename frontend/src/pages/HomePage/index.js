import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import {
  Button,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import './Home.css'
const HomePage = () => {
  return (
    <div className="home-wrapper">
      <div className="home-rightColumn">
        <div className="home-rightColumn-first">
          1
        </div>
        <div className="home-rightColumn-second">
          2
        </div>
        <div className="home-rightColumn-third">
          3
        </div>
      </div>
      <div className="home-grid">
        <Navigation />
        <Grid>
          <Grid.Column width={6}>
            <Segment>
              1
              <Segment>1</Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
