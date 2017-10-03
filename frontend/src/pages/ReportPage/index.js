import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import Navigation from '../../components/Navigation'
import ReportSubNav from './ReportSubNav'
import ReportCalory from './ReportCalory'
import ReportNutrtion from './ReportNutrtion'
import './Report.css'

class ReportPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="report">
        <Navigation />
        <ReportSubNav />
        <ReportCalory />
        <ReportNutrtion />
      </div>
    )
  }
}

export default ReportPage
