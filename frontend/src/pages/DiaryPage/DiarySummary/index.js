import React, { Component } from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Segment, List } from 'semantic-ui-react'
import * as Style from './StyledDiarySummary'

// 컴포넌트
import SectionHeader from './SectionHeader'
import SummaryListItem from './SummaryListItem'
import DiarySocialBtns from './DiarySocialBtns'
import Comment from './Comment'
import SummaryPieChart from '../../../components/Charts/SummaryPieChart'

// API 통신용 date형식 리턴하는 함수: YYYYMMDD
import { dateStringForApiQuery } from '../../../helper/date'

// 리덕스 액션
import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../../actions/getFoodSummary'
import { getGoalKcal } from '../../../actions/diaryKcal' // 하루 단위 목표 칼로리 get

class DiarySummary extends Component {
  componentWillMount() {
    const {
      getFoodSummaryFromDB,
      getGoalKcal,
      dateState,
    } = this.props

    const date = dateStringForApiQuery(dateState)

    getFoodSummaryFromDB(date)

    getGoalKcal(date)
  }

  render() {
    const {
      defaultGoalCalorie,
      eatKcal,
      burnKcal,
      kcalGoal,
    } = this.props

    const goalCalorie = kcalGoal
      ? kcalGoal
      : defaultGoalCalorie

    const restCalorie =
      goalCalorie - eatKcal + burnKcal

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
              kcal={eatKcal}
            />
            <SummaryListItem
              label="운동 칼로리"
              kcal={burnKcal}
            />
            <SummaryListItem
              label="남은 칼로리"
              kcal={restCalorie}
            />
          </List>
          {/* 리스트 끝 */}

          {/* comment 시작 */}
          <SectionHeader subtitle="COMMENT" />
          <Comment
            restKcal={restCalorie}
            goalKcal={goalCalorie}
            eatKcal={eatKcal}
          />
          {/* comment 끝 */}

          {/* 파이 차트 시작 */}
          <SectionHeader subtitle="NUTRITION\nGRAPH" />
          <span style={Style.unitLabel}>
            (단위: kcal)
          </span>
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
    // nutritionKcals:
    //   state.diarySummary.nutritionKcals,
    eatKcal: state.diarySummary.eatKcal,
    burnKcal: state.diarySummary.burnKcal,
    dateState: state.today.date,
    kcalGoal: state.goalKcal.kcal,
    defaultGoalCalorie:
      state.auth.userInfo.userDefaultKcal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodSummaryFromDB: date =>
      dispatch(getFoodSummaryFromDB(date)),
    getGoalKcal: date =>
      dispatch(getGoalKcal(date)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiarySummary)
