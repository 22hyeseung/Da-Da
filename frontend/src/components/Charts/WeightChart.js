import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { getAllWeightFromDB } from '../../actions/weight'
import isEmpty from 'lodash/isEmpty'

class WeightChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.props.getAllWeightFromDB()
  }

  render() {
    if (isEmpty(this.props.weightAllLog))
      return null
    return (
      <AreaChart
        key={String(Math.random())}
        width={830}
        height={260}
        data={this.props.weightAllLog}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id="colorCurrent"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#26d0ce"
              stopOpacity={0.8}
            />
            <stop
              offset="45%"
              stopColor="#2A8CAD"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient
            id="colorGoal"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="#2A8CAD"
              stopOpacity={0.8}
            />
            <stop
              offset="98%"
              stopColor="#1a2980"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="current"
          stroke="#26d0ce"
          fillOpacity={1}
          fill="url(#colorCurrent)"
        />
        <Area
          type="monotone"
          dataKey="goal"
          stroke="#2A8CAD"
          fillOpacity={1}
          fill="url(#colorGoal)"
        />
      </AreaChart>
    )
  }
}
const mapStateToProps = state => {
  return {
    weightAllLog: state.weightAll.allLog,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllWeightFromDB: () =>
      dispatch(getAllWeightFromDB()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightChart)
