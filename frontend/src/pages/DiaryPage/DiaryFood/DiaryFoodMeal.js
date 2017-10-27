import React from 'react'
import { Segment, Label } from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
import DiaryFoodList from './DiaryFoodList'
import * as Style from './StyledDiaryFood'

class DiaryFoodMeal extends React.Component {
  render() {
    // 끼니별 등록된 칼로리 계산식
    let totalKcal =
      this.props.foodresult.length === 0
        ? 0
        : this.props.foodresult
            .map(kcal => {
              return kcal.food_kcal
            })
            .reduce((pre, cur) => pre + cur)
            .toFixed(1)

    return (
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        <div>
          <div className="diary-food-label">
            <div className="diary-food-title">
              {this.props.type} 식사
              <span className="diary-food-meal-count">
                {this.props.foodresult.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              현재 {this.props.type} 식사 섭취 칼로리
              <Label.Detail>
                {totalKcal} kcal
              </Label.Detail>
            </Label>
          </div>

          {/* 예외처리_get했던 데이터가 없을 경우 */}
          {this.props.foodresult.length === 0 ? (
            ''
          ) : (
            <div className="diary-food-meal-list-scroll">
              <div
                style={{ display: 'flex' }}
                className="diary-food-meal-list-card"
              >
                <DiaryFoodList
                  type={this.props.type}
                  foodresult={
                    this.props.foodresult
                  }
                />
              </div>
            </div>
          )}
        </div>
        <DiaryFoodAdd type={this.props.type} />
      </Segment>
    )
  }
}

export default DiaryFoodMeal
