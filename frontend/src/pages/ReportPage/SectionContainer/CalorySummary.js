import React from 'react'
import { connect } from 'react-redux'
// 스타일링
import { Segment, Header, List } from 'semantic-ui-react'
import {
  smSegment,
  smHeader,
  summaryImg,
  smSubHeader,
  smListLayout,
  smListContent,
} from '../StyledReport'
import '../Report.css'

const CalorySummary = (props) => {
  let sum = 0
  let summaryData = [
    {
      eat_log_meal_tag: '저녁',
      'sum(kcal)': 0,
    },
    {
      eat_log_meal_tag: '간식',
      'sum(kcal)': 0,
    },
    {
      eat_log_meal_tag: '점심',
      'sum(kcal)': 0,
    },
    {
      eat_log_meal_tag: '아침',
      'sum(kcal)': 0,
    },
  ]

  props.calorySummary.map((val, i) => {
    if (val.eat_log_meal_tag) {
      summaryData[i]['sum(kcal)'] = val['sum(kcal)']
    }
    sum += val['sum(kcal)']
  })

  return (
    <Segment
      style={{
        ...smSegment,
        backgroundImage: `url(${summaryImg.calory})`,
        backgroundSize: '90%',
      }}
    >
      <Header style={smHeader}>
        <Header.Subheader style={smSubHeader}>SUMMARY</Header.Subheader>
        요약
      </Header>

      <List style={smListLayout}>
        <List.Item>
          <List.Content floated="right" style={smListContent}>
            (kcal)
          </List.Content>
        </List.Item>
        {summaryData.map((val, i) => (
          <List.Item
            key={i}
            className="report-summary-list"
            style={{ display: 'flex' }}
          >
            <List.Content className="report-summary-title">
              {val['eat_log_meal_tag']}
            </List.Content>
            <List.Content floated="right" className="report-rate">
              {/*합계가 0이면 = 데이터가 없으면 계산 하지 않고 0%로 렌더*/}
              {!sum ? 0 : Math.round(val['sum(kcal)'] / sum * 100)} %
            </List.Content>
            <List.Content floated="right" className="report-result">
              {Math.round(val['sum(kcal)'])}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    calorySummary: state.calorySummary.summaryData,
  }
}

export default connect(mapStateToProps, null)(CalorySummary)
