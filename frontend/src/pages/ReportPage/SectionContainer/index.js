import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Grid, Segment } from 'semantic-ui-react'
import { segment } from '../StyledReport'
import '../Report.css'
// helper함수
import { dateStringForApiQuery } from '../../../helper/date'
// 리덕스 액션
import { getKcalSummaryFromDB } from '../../../actions/report'
// 컴포넌트
import SectionHeader from './SectionHeader'
import CaloriesChart from '../../../components/Charts/CaloriesChart'
import NutritionChart from '../../../components/Charts/NutritionChart'
import CalorySummary from './CalorySummary'
import NutritionSummary from './NutritionSummary'

class SectionContainer extends Component {
  componentDidMount() {
    const { lastDateState, beforeDateState, getKcalSummaryFromDB } = this.props
    const startDate = dateStringForApiQuery(beforeDateState)
    const endDate = dateStringForApiQuery(lastDateState)
    getKcalSummaryFromDB(startDate, endDate)
  }
  render() {
    const { title } = this.props
    return (
      <Segment style={segment}>
        <Grid columns="equal" style={{ margin: '0px' }}>
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
            {title === '영양분' ? <NutritionSummary /> : <CalorySummary />}
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lastDateState: state.today.date,
    beforeDateState: state.today.beforeDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKcalSummaryFromDB: (startDate, endDate) =>
      dispatch(getKcalSummaryFromDB(startDate, endDate)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer)
