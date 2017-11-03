import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
// 스타일링
import { Message, Image } from 'semantic-ui-react'
// helper
import { dateStringForApiQuery } from '../../helper/date'
// 리덕스 action
import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../actions/diarySummary'
import pieDefault from '../../static/img/pie_notyet.svg'
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

    let flagGraph = false

    nutritionKcals.map(val => {
      if (val.value) {
        flagGraph = true
      }
    })

    if (!flagGraph) {
      return (
        <div style={{ margin: '37.5px' }}>
          <Image src={pieDefault} />
          <p
            style={{
              color: '#A8B7C7',
              fontSize: '12px',
              marginTop: '25px',
              textAlign: 'center',
            }}
          >
            식단을 등록하세요! <br /> 영양비율을 확인할 수 있습니다.
          </p>
        </div>
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
