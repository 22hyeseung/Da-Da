import React, { Component } from 'react'
import './Report.css'

// 컴포넌트
import Navigation from '../../components/Navigation'
import WeekNavigation from './WeekNavigation'
import SectionContainer from './SectionContainer/index'
import Footer from '../../components/Footer'

class ReportPage extends Component {
  render() {
    return (
      <div className="report">
        <Navigation />
        <WeekNavigation />
        <SectionContainer title="칼로리" />
        <SectionContainer title="영양분" />
        <Footer />
      </div>
    )
  }
}
export default ReportPage
