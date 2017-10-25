import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from 'recharts'
import isEmpty from 'lodash/isEmpty'

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
    const {
      calorieSummary,
      errorState,
    } = this.props

    if (isEmpty(calorieSummary)) return null

    const data = calorieSummary
    // const data = [
    //   {
    //     name: '탄수화물',
    //     value: calorieSummary.today_carb,
    //   },
    //   {
    //     name: '단백질',
    //     value: calorieSummary.today_protein,
    //   },
    //   {
    //     name: '지방',
    //     value: calorieSummary.today_fat,
    //   },
    // ]

    if (calorieSummary.today_kcal === 0) {
      return (
        <Message
          warning
          header="데이터가 충분하지 않습니다!"
          content="차트를 표시하기 위해 하나 이상의 식사를 등록해주세요."
        />
      )
    }

    if (errorState) {
      return (
        <Message negative>
          <Message.Header>
            오류가 발생하였습니다.
          </Message.Header>
          <p>잠시 후 다시 시도해주세요.</p>
        </Message>
      )
    }

    return (
      <PieChart width={250} height={260}>
        <Pie
          key={String(Math.random())}
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
    errorState: state.diarySummary.errorState,
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
