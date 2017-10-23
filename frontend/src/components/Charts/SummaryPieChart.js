import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from 'recharts'

// API 통신용 date형식 리턴하는 함수: YYYYMMDD
import { dateStringForApiQuery } from '../../helper/date'

import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../actions/getFoodSummary'

const COLORS = ['#16325c', '#a8b7c7', '#e5e5e5']

class SummaryPieChart extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {
      dateState,
      getFoodSummaryFromDB,
    } = this.props
    const date = dateStringForApiQuery(dateState)
    getFoodSummaryFromDB(date)
  }

  render() {
    const { calorieSummary } = this.props
    const data = [
      {
        name: '탄수화물',
        value: calorieSummary.today_carb,
      },
      {
        name: '단백질',
        value: calorieSummary.today_protein,
      },
      {
        name: '지방',
        value: calorieSummary.today_fat,
      },
    ]

    return (
      <PieChart width={250} height={260}>
        <Pie
          data={data}
          cx={110}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          legendType="square"
          paddingAngle={1.3}
        >
          {data.map((entry, index) => (
            <Cell
              fill={COLORS[index]}
              key={entry.nutrition}
            />
          ))}
        </Pie>
        <Legend align="right" layout="vertical" />
        <Tooltip />
      </PieChart>
    )
  }
}

const mapStateToProps = state => {
  return {
    calorieSummary:
      state.diarySummary.calorieSummary,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodSummaryFromDB: date =>
      dispatch(getFoodSummaryFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryPieChart)
