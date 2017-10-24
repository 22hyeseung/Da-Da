import React from 'react'
// 스타일링
import { Grid, Segment } from 'semantic-ui-react'
import { segment } from './StyledReport'
import './Report.css'
// 컴포넌트
import ReportHeader from './ReportHeader'
import CaloriesChart from '../../components/Charts/CaloriesChart'
import NutritionChart from '../../components/Charts/NutritionChart'
import ReportCalorySummary from './ReportCalorySummary'
import ReportNutritionSummary from './ReportNutritionSummary'

const ReportContainer = ({ title }) => {
  return (
    <Segment style={segment}>
      <Grid
        columns="equal"
        style={{ margin: '0px' }}
      >
        <Grid.Column style={{ padding: '0px' }}>
          {title === '영양분' ? (
            <div className="report-calory">
              <ReportHeader title={title} />
              <NutritionChart />
            </div>
          ) : (
            <div className="report-calory">
              <ReportHeader title={title} />
              <CaloriesChart />
            </div>
          )}
        </Grid.Column>
        <Grid.Column
          width={4}
          style={{
            padding: '8px 0px 0px 8px',
          }}
        >
          {title === '영양분' ? (
            <ReportNutritionSummary />
          ) : (
            <ReportCalorySummary />
          )}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default ReportContainer
