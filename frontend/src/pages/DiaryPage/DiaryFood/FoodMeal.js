import React from 'react'
import { Segment, Label } from 'semantic-ui-react'
import FoodAdd from './FoodAdd'
import FoodList from './FoodList'
import * as Style from './StyledDiaryFood'

export class FoodMeal extends React.Component {
  render() {
    const { foodresult, type } = this.props
    // 끼니별 등록된 칼로리 계산식
    let totalKcal =
      foodresult.length === 0
        ? 0
        : foodresult
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
              {type} 식사
              <span className="diary-food-meal-count">
                {foodresult.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              현재 {type} 식사 섭취 칼로리
              <Label.Detail>
                {totalKcal} kcal
              </Label.Detail>
            </Label>
          </div>

          {/* 예외처리_get했던 데이터가 없을 경우 */}
          {foodresult.length === 0 ? (
            ''
          ) : (
            <div className="diary-food-meal-list-scroll">
              <div
                style={{ display: 'flex' }}
                className="diary-food-meal-list-card"
              >
                <FoodList
                  type={type}
                  foodresult={foodresult}
                />
              </div>
            </div>
          )}
        </div>
        <FoodAdd type={type} />
      </Segment>
    )
  }
}

export default FoodMeal
