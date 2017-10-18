import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import './Report.css'
// import ReportSampleChart from './ReportSampleChart'
import CaloriesChart from '../../components/Charts/CaloriesChart'

class ReportNutrtion extends Component {
  render() {
    return (
      <div className="report-nutrition">
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            fontFamily: 'Spoqa Han Sans',
            textAlign: 'left',
            color: '#16325C',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat',
              fontSize: '14px',
              fontWeight: '600',
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
        <CaloriesChart />
      </div>
    )
  }
}

export default ReportNutrtion
