import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './Report.css'
// import ReportSampleChart from './ReportSampleChart'
import NutritionChart from '../../components/Charts/NutritionChart'

class ReportNutrition extends Component {
  render() {
    return (
      <div className="report-nutrition">
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            textAlign: 'left',
            color: '#16325C',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat-bold',
              fontSize: '14px',
              textAlign: 'left',
              color: '#1f2e79',
            }}
          >
            THIS WEEK’s
          </Header.Subheader>
          영양분 리포트
        </Header>
        {/* <ReportSampleChart />
         */}
        <NutritionChart />
      </div>
    )
  }
}

export default ReportNutrition
