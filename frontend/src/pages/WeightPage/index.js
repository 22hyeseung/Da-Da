import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Navigation from '../../components/Navigation'
import WeightView from './WeightView'
import WeightGraph from './WeightGraph'
import WeightDaily from './WeightDaily'
import './Weight.css'
import { fetchWeightFromDB } from '../../actions/weight'
import ComponentLoader from '../../components/Loader/ComponentLoader'

class WeightPage extends React.Component {
  state = {
    loading: false,
  }
  componentWillMount() {
    // this.props.fetchWeightLogs()
    this.setState({ loading: true }, () =>
      this.getDelay(),
    )
  }
  getDelay = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }
  render() {
    return (
      <div className="weight-grid">
        <Navigation />
        {this.state.loading ? (
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
                <WeightView />
                <WeightGraph />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={{
                  padding: '0px 0px 0px 7px',
                }}
              >
                <WeightDaily />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodresult: state.foodLogs.foodresult,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeightLogs: () =>
      dispatch(fetchWeightFromDB()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightPage)
