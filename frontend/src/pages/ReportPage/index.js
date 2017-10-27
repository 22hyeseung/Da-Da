import React, { Component } from 'react'
import './Report.css'

// 컴포넌트
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ReportSubNav from './ReportSubNav'
import ReportContainer from './ReportContainer'

class ReportPage extends Component {
  render() {
    return (
      <div className="report">
        <Navigation />
        <ReportSubNav />
        <ReportContainer title="칼로리" />
        <ReportContainer title="영양분" />
        <Footer />
      </div>
    )
  }
}

export default ReportPage
