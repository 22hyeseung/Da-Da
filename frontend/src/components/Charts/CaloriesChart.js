import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
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
import {
  dateStringForApiQuery,
  dateDotToDateType,
} from '../../helper/date'
import { getCaloriesForAWeekFromDB } from '../../actions/reportAPIs'

const data = [
  {
    day: '4/12',
    아침: 400,
    점심: 380,
    저녁: 210,
    간식: 120,
    목표칼로리: 1400,
  },
  {
    day: '4/13',
    아침: 421,
    점심: 650,
    저녁: 110,
    간식: 0,
    목표칼로리: 1300,
  },
  {
    day: '4/14',
    아침: 389,
    점심: 260,
    저녁: 280,
    간식: 120,
    목표칼로리: 1400,
  },
  {
    day: '4/15',
    아침: 430,
    점심: 340,
    저녁: 200,
    간식: 140,
    목표칼로리: 1200,
  },
  {
    day: '4/16',
    아침: 350,
    점심: 480,
    저녁: 400,
    간식: 36,
    목표칼로리: 1100,
  },
  {
    day: '4/17',
    아침: 392,
    점심: 620,
    저녁: 120,
    간식: 100,
    목표칼로리: 1400,
  },
  {
    day: '4/18',
    아침: 338,
    점심: 610,
    저녁: 280,
    간식: 0,
    목표칼로리: 1600,
  },
]
class CaloriesChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const {
      beforeDateState,
      lastDateState,
      getCaloriesForAWeekFromDB,
    } = this.props

    const startDate = dateStringForApiQuery(
      beforeDateState,
    )
    const endDate = dateStringForApiQuery(
      lastDateState,
    )
    // 일주일간의 칼로리 정보 get
    getCaloriesForAWeekFromDB(startDate, endDate)
  }

  render() {
    let dateType = dateDotToDateType(
      this.props.beforeDateState,
    )

    // 일주일치 날짜
    const dateArray = []
    for (let i = 0; i < 7; i++) {
      dateArray.push(
        new Date(
          dateType.getFullYear(),
          dateType.getMonth(),
          dateType.getDate() + i,
        ),
      )
    }

    // const defaultGoal = this.props
    //   .defaultGoalCalorie
    const defaultGoal = 1280 // test용 static값
    const goalKcal = this.props.goalCaloriePerWeek
    let mealLog = this.props.totalMealLogPerWeek

    dateArray.map((el, index, all) => {
      const getMatched = _.reject(
        goalKcal,
        val => {
          return (
            val.diary_date.getTime() !==
            el.getTime()
          )
        },
      )

      const kcal = _.mapValues(
        getMatched,
        val => {
          return val.day_log_kcal
        },
      )

      all[index] = {
        day: el,
        목표칼로리: Object.values(kcal)[0]
          ? Object.values(kcal)[0]
          : defaultGoal,
      }
    })

    dateArray.map((el, index, all) => {
      const getMatched = _.reject(
        mealLog,
        val => {
          return (
            val.day.getTime() !== el.day.getTime()
          )
        },
      )

      const meal = _.mapValues(
        getMatched,
        val => {
          return {
            아침: val.아침,
            점심: val.점심,
            저녁: val.저녁,
            간식: val.간식,
          }
        },
      )

      all[index] = {
        ...all[index],
        day: el.day.getDate() + '일',
        ...Object.values(meal)[0],
      }
    })

    return (
      <ComposedChart
        width={850}
        height={300}
        data={dateArray}
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
          dataKey="아침"
          stackId="a"
          fill="#16325c"
          maxBarSize={55}
        />
        <Bar
          dataKey="점심"
          stackId="a"
          fill="#54698d"
          maxBarSize={55}
        />
        <Bar
          dataKey="저녁"
          stackId="a"
          fill="#a8b7c7"
          maxBarSize={55}
        />
        <Bar
          dataKey="간식"
          stackId="a"
          fill="#e0e5ee"
          maxBarSize={55}
        />
        <Line
          type="monotone"
          dataKey="목표칼로리"
          stroke="#26d0ce"
        />
      </ComposedChart>
    )
  }
}

const mapStateToProps = state => {
  return {
    // 일주일간 등록한 목표 칼로리
    goalCaloriePerWeek:
      state.caloriesChart.goalCaloriePerWeek,
    // 일주일간 기록한 전체 식사 정보
    totalMealLogPerWeek:
      state.caloriesChart.totalMealLogPerWeek,
    // 목표칼로리 등록하지 않은 날의 기본 칼로리 (첫 가입시 입력한 칼로리)
    defaultGoalCalorie:
      state.caloriesChart.defaultGoalCalorie,
    // 기준일 날짜 (string: YYYY. MM. DD.)
    lastDateState: state.today.date,
    // 시작일(기준일-6일) 날짜 (string: YYYY. MM. DD.)
    beforeDateState: state.beforeDay.beforeDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // 칼로리 차트 관련 데이터 불러오는 액션
    getCaloriesForAWeekFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getCaloriesForAWeekFromDB(
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
