import React, { Component } from 'react'
import { connect } from 'react-redux'
// 차트
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
} from 'recharts'
// YYYY. MM. DD.(날짜 기본 포맷)를 api 요청 포맷(YYYYMMDD)으로 변환하는 함수
import { dateStringForApiQuery } from '../../helper/date'
// 리덕스 액션
import { getNutritionFactsForAWeekFromDB } from '../../actions/reportAPIs'

class CaloriesChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 기준일의 6일 전 날짜 (YYYYMMDD)
      startDate: dateStringForApiQuery(
        this.props.beforeDateState,
      ),
      // 기준일 (오늘 혹은 사용자가 지정한 날짜)(YYYYMMDD)
      endDate: dateStringForApiQuery(
        this.props.lastDateState,
      ),
    }
  }

  componentWillMount() {
    const { startDate, endDate } = this.state
    // get
    this.props.getNutritionFactsForAWeekFromDB(
      startDate,
      endDate,
    )
  }

  render() {
    // {day,탄수화물,단백질,지방} => {day,탄수화물,단백질,지방,목표칼로리}
    const {
      nutritionLogs,
      caloriesLogsForAWeek,
    } = this.props

    console.log(nutritionLogs)
    const chartData = new Array()
    nutritionLogs.map(aDay => {
      chartData.push({
        day:
          aDay.eat_log_diary_date.substr(8, 2) +
          '일',
        탄수화물: Math.round(aDay.carb),
        단백질: Math.round(aDay.protein),
        지방: Math.round(aDay.fat),
      })
    })
    // // 이 부분 추후 지울 예정
    // defaultGoalCalorie = '1200'

    chartData.map((item, i) => {
      // console.log(caloriesLogsForAWeek)
      item['목표칼로리'] = 1600
    })
    // console.log(chartData)

    return (
      <ComposedChart
        width={850}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 5,
          left: 0,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingBottom: 20 }}
        />
        <Tooltip />
        <Bar
          dataKey="탄수화물"
          stackId="a"
          fill="#16325c"
          maxBarSize={55}
        />
        <Bar
          dataKey="단백질"
          stackId="a"
          fill="#54698d"
          maxBarSize={55}
        />
        <Bar
          dataKey="지방"
          stackId="a"
          fill="#a8b7c7"
          maxBarSize={55}
        />
        <Line
          type="monotone"
          dataKey="목표칼로리"
          stroke="#ffb75d"
        />
      </ComposedChart>
    )
  }
}

const mapStateToProps = state => {
  return {
    nutritionLogs:
      state.nutritionChart
        .nutritionFactsLogsPerWeek,
    caloriesLogsForAWeek:
      state.caloriesChart.caloriesLogsForAWeek,
    lastDateState: state.today.date,
    beforeDateState: state.beforeDay.beforeDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNutritionFactsForAWeekFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getNutritionFactsForAWeekFromDB(
          startDate,
          endDate,
        ),
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaloriesChart)
