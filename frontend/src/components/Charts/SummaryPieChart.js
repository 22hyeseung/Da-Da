import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
// 스타일링
import { Message } from 'semantic-ui-react'
// helper
import { dateStringForApiQuery } from '../../helper/date'
// 리덕스 action
import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../actions/getFoodSummary'
//차트
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from 'recharts'

// 파이 차트 colors
const COLORS = ['#16325c', '#a8b7c7', '#e5e5e5']

class SummaryPieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { getFoodSummaryFromDB } = this.props
    const date = this.props.dateState
    getFoodSummaryFromDB(
      dateStringForApiQuery(date),
    )
  }

  render() {
    const {
      nutritionKcals,
      errorState,
    } = this.props

    if (isEmpty(nutritionKcals)) {
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
          data={nutritionKcals}
          cx={110}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          legendType="square"
          paddingAngle={1.3}
        >
          {nutritionKcals.map((entry, index) => (
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
    nutritionKcals:
      state.diarySummary.nutritionKcals,
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
