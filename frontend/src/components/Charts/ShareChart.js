import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
// 스타일링
import { Message } from 'semantic-ui-react'
// helper
import { dateStringForApiQuery } from '../../helper/date'

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

class ShareChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.dateState,
    }
  }

  componentWillMount() {

  }

  render() {
    const {
      chartData,
      errorState,
    } = this.props

    if (isEmpty(chartData)) {
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
      <PieChart width={140} height={83} margin={{ left: 45 }}>
        <Pie
          key={String(Math.random())}
          data={chartData}
          cx={40}
          cy={40}
          innerRadius={20}
          outerRadius={40}
          fill="#8884d8"
        >
          {chartData.map((entry, index) => (
            <Cell
              fill={COLORS[index]}
              key={entry.nutrition}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    )
  }
}

export default ShareChart
