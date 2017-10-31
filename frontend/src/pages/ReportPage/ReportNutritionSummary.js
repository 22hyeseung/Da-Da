import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// 스타일링
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import {
  smSegment,
  smHeader,
  summaryImg,
  smSubHeader,
  smListLayout,
  smListContent,
} from './StyledReport'
import './Report.css'

import { dateStringForApiQuery } from '../../helper/date'
// 리덕스 액션
import { getNutritionSummaryFromDB } from '../../actions/reportAPIs'

class ReportNutritionSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const {
      lastDateState,
      beforeDateState,
      getNutritionSummaryFromDB,
    } = this.props

    const startDate = dateStringForApiQuery(
      lastDateState,
    )
    const endDate = dateStringForApiQuery(
      beforeDateState,
    )
    getNutritionSummaryFromDB(startDate, endDate)
  }

  render() {
    let { nutritionSummary } = this.props
    let sum =
      nutritionSummary.carb +
      nutritionSummary.protein +
      nutritionSummary.fat

    const nutritionArray = [
      { 탄수화물: nutritionSummary.carb },
      { 단백질: nutritionSummary.protein },
      { 지방: nutritionSummary.fat },
    ]

    return (
      <Segment
        style={{
          ...smSegment,
          backgroundImage: `url(${summaryImg.nutrition})`,
        }}
      >
        <Header style={smHeader}>
          <Header.Subheader style={smSubHeader}>
            SUMMARY
          </Header.Subheader>
          요약
        </Header>

        <List style={smListLayout}>
          <List.Item>
            <List.Content
              floated="right"
              style={smListContent}
            >
              (kcal)
            </List.Content>
          </List.Item>

          {nutritionArray.map(val => (
            <List.Item
              className="report-summary-list"
              style={{ display: 'flex' }}
            >
              <List.Content
                className="report-summary-title"
                verticalAlign="bottom"
              />
              {Object.keys(val)}
              <List.Content
                floated="right"
                className="report-result"
              >
                {Math.round(
                  Object.values(val) / sum * 100,
                )}{' '}
                %
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    nutritionSummary:
      state.nutritionSummary.summaryData,
    lastDateState: state.today.date,
    beforeDateState: state.today.beforeDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNutritionSummaryFromDB: (
      startDate,
      endDate,
    ) =>
      dispatch(
        getNutritionSummaryFromDB(
          (startDate, endDate),
        ),
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportNutritionSummary)
