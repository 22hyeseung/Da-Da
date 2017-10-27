import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import {
  Segment,
  Header,
  List,
  Message,
} from 'semantic-ui-react'
import * as Style from './StyledDiarySummary'

// 컴포넌트
import SectionHeader from './SectionHeader'
import SummaryListItem from './SummaryListItem'
import DiarySocialBtns from './DiarySocialBtns'
import SummaryPieChart from '../../../components/Charts/SummaryPieChart'

// API 통신용 date형식 리턴하는 함수: YYYYMMDD
import { dateStringForApiQuery } from '../../../helper/date'

// 리덕스 액션
import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../../actions/getFoodSummary'
import { getCalorieGoalFromDB } from '../../../actions/calorieGoalsAPI' // 하루 단위 목표 칼로리 get

class DiarySummary extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {
      getFoodSummaryFromDB,
      getCalorieGoalFromDB,
      dateState,
    } = this.props

    const date = dateStringForApiQuery(dateState)

    getFoodSummaryFromDB(date)

    getCalorieGoalFromDB(date)
  }

  render() {
    const {
      defaultGoalCalorie,
      calorieSummary,
      kcalGoal,
    } = this.props

    const goalCalorie = kcalGoal.day_log_kcal
      ? kcalGoal.day_log_kcal
      : defaultGoalCalorie

    const restCalorie =
      goalCalorie -
      calorieSummary.today_kcal +
      calorieSummary.today_burn_kcal

    return (
      <div>
        <Segment style={Style.segment}>
          {/* title 시작 */}
          <SectionHeader
            headerStyle={Style.header}
            subtitle="SUMMARY"
            title="요약"
          />
          {/* title 끝 */}

          {/* 리스트 시작 */}
          <List
            divided
            verticalAlign="bottom"
            style={{ marginLeft: '30%' }}
          >
            <List.Item style={Style.listItem}>
              <List.Content />
              <List.Content
                style={Style.listContent}
              >
                (kcal)
              </List.Content>
            </List.Item>

            <SummaryListItem
              label="목표 칼로리"
              kcal={goalCalorie}
            />
            <SummaryListItem
              label="섭취 칼로리"
              kcal={Math.round(
                calorieSummary.today_kcal,
              )}
            />
            <SummaryListItem
              label="운동 칼로리"
              kcal={Math.round(
                calorieSummary.today_burn_kcal,
              )}
            />
            <SummaryListItem
              label="남은 칼로리"
              kcal={restCalorie}
            />
          </List>
          {/* 리스트 끝 */}

          {/* comment 시작 */}
          <SectionHeader subtitle="COMMENT" />

          {restCalorie < 0 ? (
            <Segment style={Style.comment}>
              <span>
                목표칼로리를 초과하였어요!<br />운동을 더 하셔야겠어요!
              </span>
            </Segment>
          ) : restCalorie ? (
            <Segment style={Style.comment}>
              <span>
                {restCalorie}kcal 남았어요! <br /> 너무
                잘하고 있어요!
              </span>
            </Segment>
          ) : (
            <Segment style={Style.comment} t>
              <span>
                아직 오늘의 식사를 <br /> 기록하지 않으셨어요!
              </span>
            </Segment>
          )}

          {/* comment 끝 */}

          {/* 파이 차트 시작 */}
          <SectionHeader subtitle="NUTRITION\nGRAPH" />
          <SummaryPieChart
            style={{ marginTop: '4px' }}
          />
          {/* 파이 차트 끝 */}
        </Segment>
        <DiarySocialBtns />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    calorieSummary:
      state.diarySummary.calorieSummary,
    dateState: state.today.date,
    kcalGoal: state.calorieGoalAboutADay.kcalGoal,
    defaultGoalCalorie:
      state.auth.userInfo.userDefaultKcal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodSummaryFromDB: date =>
      dispatch(getFoodSummaryFromDB(date)),
    getCalorieGoalFromDB: date =>
      dispatch(getCalorieGoalFromDB(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiarySummary)
