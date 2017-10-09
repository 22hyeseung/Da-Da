import React from 'react'
import {
  Segment,
  Icon,
  Button,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'

const DiaryFoodListCard = () => {
  return (
    <Segment style={Style.mealCard}>
      <div className="diary-food-meal-list-card-firstRow">
        <p className="diary-food-meal-list-card-firstRow-title">
          현미밥
        </p>
      </div>
      <p className="diary-food-meal-list-card-calory">
        100
        <span className="diary-food-meal-list-card-calory-unit">
          kcal
        </span>
      </p>
      <div className="diary-food-meal-list-card-nutritions">
        <span className="diary-food-meal-list-card-nutrition-wrapper">
          <span className="diary-food-meal-list-card-nutrition-title">
            탄
          </span>
          <span className="diary-food-meal-list-card-nutrition-kcal">
            100
          </span>
        </span>
        <span className="diary-food-meal-list-card-nutrition-wrapper">
          <span className="diary-food-meal-list-card-nutrition-title">
            단
          </span>
          <span className="diary-food-meal-list-card-nutrition-kcal">
            100
          </span>
        </span>
        <span className="diary-food-meal-list-card-nutrition-wrapper">
          <span className="diary-food-meal-list-card-nutrition-title">
            지
          </span>
          <span className="diary-food-meal-list-card-nutrition-kcal">
            100
          </span>
        </span>
      </div>
    </Segment>
  )
}

export default DiaryFoodListCard
