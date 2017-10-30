import React, { Component } from 'react'
import { connect } from 'react-redux'
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

// helper함수
import { dateStringForApiQuery } from '../../helper/date'
// 리덕스 액션
import { getKcalSummaryFromDB } from '../../actions/reportAPIs'

class ReportCalorySummary extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const {
      lastDateState,
      beforeDateState,
      getKcalSummaryFromDB,
    } = this.props

    const startDate = dateStringForApiQuery(
      beforeDateState,
    )
    const endDate = dateStringForApiQuery(
      lastDateState,
    )
    getKcalSummaryFromDB(startDate, endDate)
  }

  render() {
    const { calorySummary } = this.props
    let sum = 0
    calorySummary.map(val => {
      return (sum += val['sum(kcal)'])
    })

    return (
      <Segment
        style={{
          ...smSegment,
          backgroundImage: `url(${summaryImg.calory})`,
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
          {calorySummary.map(val => (
            <List.Item
              className="report-summary-list"
              style={{ display: 'flex' }}
            >
              <List.Content className="report-summary-title">
                {val['eat_log_meal_tag']}
              </List.Content>
              <List.Content
                floated="right"
                className="report-rate"
              >
                {Math.round(
                  val['sum(kcal)'] / sum * 100,
                )}{' '}
                %
              </List.Content>
              <List.Content
                floated="right"
                className="report-result"
              >
                {Math.round(val['sum(kcal)'])}
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
    calorySummary:
      state.calorySummary.summaryData,
    lastDateState: state.today.date,
    beforeDateState: state.beforeDay.beforeDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getKcalSummaryFromDB: (startDate, endDate) =>
      dispatch(
        getKcalSummaryFromDB(startDate, endDate),
      ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReportCalorySummary)
