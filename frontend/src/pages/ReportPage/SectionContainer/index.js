import React from 'react'
// 스타일링
import { Grid, Segment } from 'semantic-ui-react'
import { segment } from '../StyledReport'
import '../Report.css'
// 컴포넌트
import SectionHeader from './SectionHeader'
import CaloriesChart from '../../../components/Charts/CaloriesChart'
import NutritionChart from '../../../components/Charts/NutritionChart'
import CalorySummary from './CalorySummary'
import NutritionSummary from './NutritionSummary'

const SectionContainer = ({ title }) => {
  return (
    <Segment style={segment}>
      <Grid
        columns="equal"
        style={{ margin: '0px' }}
      >
        <Grid.Column style={{ padding: '0px' }}>
          {title === '영양분' ? (
            <div className="report-calory">
              <SectionHeader title={title} />
              <NutritionChart />
            </div>
          ) : (
            <div className="report-calory">
              <SectionHeader title={title} />
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
            <NutritionSummary />
          ) : (
            <CalorySummary />
          )}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default SectionContainer
