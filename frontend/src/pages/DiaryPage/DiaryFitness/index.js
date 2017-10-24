import React, { Component } from 'react'

// 스타일링
import { Segment } from 'semantic-ui-react'
import { container } from './StyledFitness'

// 컴포넌트
import DiarySubHeader from '../DiarySubHeader'
import DiaryFitnessList from './DiaryFitnessList'
import DiaryFitnessAdd from './DiaryFitnessAdd'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

import { connect } from 'react-redux'
import {
  getFitnessLogsFromDB,
  deleteFitnessOfDB,
} from '../../../actions/diaryFitness'
// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryFitness extends Component {
  state = {
    loading: false,
    date: dateStringForApiQuery(
      this.props.dateState,
    ),
  }

  componentWillMount() {
    this.props.fetchFitnessLogs(this.state.date)
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }

  // Loader 일정시간추가
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }
  deleteFitnessOfDB = id => {
    this.props.deleteFitnessOfDB(id)
  }
  render() {
    if (this.state.loading) {
      return <ComponentLoader />
    }
    return (
      <Segment style={container}>
        <DiarySubHeader
          tabNameEN="FITNESS"
          tabNameKR="운동 다이어리"
          icon="fitnessIcon"
        />
        {console.log(this.props.fitnessResult)}
        {this.props.fitnessResult.map(
          (fitness, i) => (
            <DiaryFitnessList
              name={fitness.exercise_name}
              time={fitness.burn_minute}
              kcal={fitness.burn_kcal}
              id={fitness.burn_id}
              deleteFitnessOfDB={
                this.deleteFitnessOfDB
              }
            />
          ),
        )}
        <DiaryFitnessAdd />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fitnessResult: state.fitness.fitnessResult,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFitnessLogs: date =>
      dispatch(getFitnessLogsFromDB(date)),
    deleteFitnessOfDB: id =>
      dispatch(deleteFitnessOfDB(id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFitness)
