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

const NutritionSummary = (props) => {
  let sum =
    props.nutritionSummary.carb +
    props.nutritionSummary.protein +
    props.nutritionSummary.fat

  let summaryData = [
    { 탄수화물: props.nutritionSummary.carb },
    { 단백질: props.nutritionSummary.protein },
    { 지방: props.nutritionSummary.fat },
  ]

  return (
    <Segment
      style={{
        ...smSegment,
        backgroundImage: `url(${summaryImg.nutrition})`,
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

        {summaryData.map((val) => (
          <List.Item
            className="report-summary-list"
            style={{ display: 'flex' }}
          >
            <List.Content
              className="report-summary-title"
              verticalAlign="bottom"
            >
              {Object.keys(val)}
            </List.Content>
            <List.Content floated="right" className="report-result">
              {/*합계가 0이면 = 데이터가 없으면 계산 하지 않고 0%로 렌더*/}
              {!sum ? 0 : Math.round(Object.values(val) / sum * 100)} %
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  )
}

const mapStateToProps = (state) => {
  return {
    nutritionSummary: state.nutritionSummary.summaryData,
  }
}

export default connect(mapStateToProps, null)(NutritionSummary)
