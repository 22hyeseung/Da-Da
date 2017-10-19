import React from 'react'
import { Segment, Label } from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
import DiaryFoodList from './DiaryFoodList'
import * as Style from './StyledDiaryFood'

class DiaryFoodMeal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let totalKcal = ''
    return (
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        {console.log(this.props.foodresult)}
        <div className="diary-food-label">
          <div className="diary-food-title">
            {this.props.type} 식사
            <span className="diary-food-meal-count">
              {this.props.foodresult.length}
            </span>
          </div>
          <Label style={Style.currentKcal}>
            현재 {this.props.type} 식사 섭취 칼로리
            <Label.Detail>100kcal</Label.Detail>
          </Label>
        </div>
        <div className="diary-food-meal-list-scroll">
          <div
            style={{ display: 'flex' }}
            className="diary-food-meal-list-card"
          >
            <DiaryFoodList
              type={this.props.type}
              foodresult={this.props.foodresult}
            />
          </div>
        </div>
        <DiaryFoodAdd />
      </Segment>
    )
  }
}

export default DiaryFoodMeal
