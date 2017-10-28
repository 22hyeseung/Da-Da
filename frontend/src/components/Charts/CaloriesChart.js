import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
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
  getWeekArray,
} from '../../helper/date'
import { getCaloriesForAWeekFromDB } from '../../actions/reportAPIs'

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

  componentDidMount() {
    const { startDate, endDate } = this.state
    // get
    this.props.getCaloriesForAWeekFromDB(
      startDate,
      endDate,
    )
  }

  render() {
    const {
      beforeDateState,
      defaultGoalCalorie,
      goalCaloriePerWeek,
      totalMealLogPerWeek,
    } = this.props

    // 목표 칼로리 데이터 없을 시 default 값
    const defaultGoal =
      defaultGoalCalorie.day_log_kcal

    // 일주일치 날짜 배열
    const dateArray = getWeekArray(
      dateDotToDateType(beforeDateState),
    )

    dateArray.map((el, index, all) => {
      const getMatched = _.reject(
        goalCaloriePerWeek,
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

      return (all[index] = {
        day: el,
        목표칼로리: Object.values(kcal)[0]
          ? Object.values(kcal)[0]
          : defaultGoal,
      })
    })

    dateArray.map((el, index, all) => {
      const getMatched = _.reject(
        totalMealLogPerWeek,
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

      return (all[index] = {
        ...all[index],
        day: el.day.getDate() + '일',
        ...Object.values(meal)[0],
      })
    })

    return (
      <ComposedChart
        key={String(Math.random())}
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
