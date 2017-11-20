import React, { Component } from 'react'
import { connect } from 'react-redux'
// styles
import { Grid } from 'semantic-ui-react'
import './weight.css'
// actions
import {
  fetchWeightFromDB,
  getAllWeightFromDB,
} from '../../actions/weight'
// components
import Navigation from '../../components/Navigation'
import ComponentLoader from '../../components/Loader/ComponentLoader'
import DashBoard from './DashBoard'
import DailyRecords from './DailyRecords'
import Graph from './Graph'

class WeightPage extends Component {
  // willmount보다 빠름!
  componentDidMount() {
    this.props.fetchWeightLogs()
    this.props.getAllWeightFromDB()
  }

  render() {
    return (
      <div className="weight-grid">
        <Navigation />
        {this.props.isLoading ? (
          <ComponentLoader />
        ) : (
          <Grid
            columns="equal"
            style={{ margin: '0px' }}
          >
            <Grid.Row stretched>
              <Grid.Column
                style={{ padding: '0px' }}
              >
                <DashBoard />
                <Graph />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{
                  padding: '0px 0px 0px 7px',
                }}
              >
                <DailyRecords />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading:
    state.weightList.isLoading ||
    state.weightAll.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchWeightLogs: () =>
    dispatch(fetchWeightFromDB()),
  getAllWeightFromDB: () =>
    dispatch(getAllWeightFromDB()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightPage)

// export default WeightPage
