import React, { Component } from 'react'
import {
  Grid,
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import summaryImg from '../../static/img/report_nutrition_img.png'
import './Report.css'
import ReportSampleChart from './ReportSampleChart'

class ReportNutrtion extends Component {
  constructor(props) {
    super(props)
  }

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
        <ReportSampleChart />
      </div>
    )
  }
}

export default ReportNutrtion
