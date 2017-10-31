import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Report.css'

// 컴포넌트
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ReportSubNav from './ReportSubNav'
import ReportContainer from './ReportContainer'
import ComponentLoader from '../../components/Loader/ComponentLoader'

class ReportPage extends Component {
  render() {
    // if (this.props.isLoading) {
    //   return <ComponentLoader />
    // }

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

const mapStateToProps = state => ({
  // isLoading:
  //   state.caloriesChart.isLoading ||
  //   state.nutritionChart.isLoading ||
  //   state.calorySummary.isLoading ||
  //   state.nutritionSummary.isLoading,
})
export default connect(mapStateToProps, null)(
  ReportPage,
)
