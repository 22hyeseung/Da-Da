import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'


class DiaryFoodListCard extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    if(typeof this.props.foodData === "undefined") {
      return null
    }

    console.log(this.props.foodData, '<< [ this.props.foodData ]');
    return (
      <Segment style={Style.mealCard}>
        <div className="diary-food-meal-list-card-firstRow">
          <p className="share-diary-food-meal-list-card-firstRow-title">
            {this.props.foodData.food_name_ko}
          </p>
        </div>
        <p className="diary-food-meal-list-card-calory">
          {this.props.foodData.food_kcal}
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
              {this.props.foodData.food_carb}
            </span>
          </span>
          <span className="diary-food-meal-list-card-nutrition-wrapper">
            <span className="diary-food-meal-list-card-nutrition-title">
              단
            </span>
            <span className="diary-food-meal-list-card-nutrition-kcal">
              {this.props.foodData.food_protein}
            </span>
          </span>
          <span className="diary-food-meal-list-card-nutrition-wrapper">
            <span className="diary-food-meal-list-card-nutrition-title">
              지
            </span>
            <span className="diary-food-meal-list-card-nutrition-kcal">
              {this.props.foodData.food_fat}
            </span>
          </span>
        </div>
      </Segment>
    )
  }
}

export default DiaryFoodListCard
