import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import ReportSubNav from './ReportSubNav'
import ReportCalory from './ReportCalory'
import ReportCalorySummary from './ReportCalorySummary'
import ReportNutrtion from './ReportNutrtion'
import ReportNutritionSummary from './ReportNutritionSummary'
import './Report.css'

class ReportPage extends Component {
  render() {
    return (
      <div className="report">
        <Navigation />
        <ReportSubNav />
        <Segment
          style={{
            boxShadow: 'none',
            border: '1px solid #d8dde6',
            padding: '12px',
          }}
        >
          <Grid
            columns="equal"
            style={{ margin: '0px' }}
          >
            <Grid.Column
              style={{ padding: '0px' }}
            >
              <ReportCalory />
            </Grid.Column>
            <Grid.Column
              width={4}
              style={{
                padding: '0px 0px 0px 7px',
              }}
            >
              <ReportCalorySummary />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment
          style={{
            boxShadow: 'none',
            border: '1px solid #d8dde6',
          }}
        >
          <Grid
            columns="equal"
            style={{ margin: '0px' }}
          >
            <Grid.Column
              style={{ padding: '0px' }}
            >
              <ReportNutrtion />
            </Grid.Column>
            <Grid.Column
              width={4}
              style={{
                padding: '0px 0px 0px 7px',
              }}
            >
              <ReportNutritionSummary />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default ReportPage
