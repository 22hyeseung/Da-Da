import React from 'react'
import { Segment, Label } from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
import * as Style from './StyledDiaryFood'

class DiaryFoodMeal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        <div className="diary-food-label">
          <div className="diary-food-title">
            {this.props.type} 식사
            <span className="diary-food-meal-count">
              0
            </span>
          </div>
          <Label style={Style.currentKcal}>
            현재 {this.props.type} 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <DiaryFoodAdd type={this.props.type} />
      </Segment>
    )
  }
}

export default DiaryFoodMeal
