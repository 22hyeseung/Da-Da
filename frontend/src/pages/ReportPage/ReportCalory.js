import React, { Component } from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'
import './Report.css'
import ReportSampleChart from './ReportSampleChart'

class ReportCalory extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="report-calory">
        {/* 왼쪽 박스 start */}
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            textAlign: 'left',
            color: '#16325C',
            margin: '0px',
            fontFamily: 'Spoqa Han Sans',
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
          칼로리 리포트
        </Header>
        <ReportSampleChart />
        {/* 왼쪽 박스 end */}
      </div>
    )
  }
}

export default ReportCalory
