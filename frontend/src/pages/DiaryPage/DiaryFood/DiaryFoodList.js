import React from 'react'
import {
  Segment,
  Icon,
  Button,
  Popup,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'

class DiaryFoodList extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.props.foodresult.map((card, i) => {
          return (
            <Segment style={Style.mealCard}>
              <div className="diary-food-meal-list-card-firstRow">
                <p className="diary-food-meal-list-card-firstRow-title">
                  {this.props.type}
                </p>
                <Popup
                  trigger={
                    <Icon
                      name="setting"
                      style={
                        Style.settingIconWrapper
                      }
                    />
                  }
                  on="click"
                  flowing
                  hoverable
                  style={{
                    padding: '1px',
                  }}
                >
                  <Button.Group>
                    <Button
                      icon="edit"
                      style={Style.settingIcon}
                    />
                    <Button
                      icon="trash outline"
                      style={Style.settingIcon}
                    />
                  </Button.Group>
                </Popup>
              </div>
              <p className="diary-food-meal-list-card-calory">
                {card.food_kcal}
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
                    {card.food_carb}
                  </span>
                </span>
                <span className="diary-food-meal-list-card-nutrition-wrapper">
                  <span className="diary-food-meal-list-card-nutrition-title">
                    단
                  </span>
                  <span className="diary-food-meal-list-card-nutrition-kcal">
                    {card.food_protein}
                  </span>
                </span>
                <span className="diary-food-meal-list-card-nutrition-wrapper">
                  <span className="diary-food-meal-list-card-nutrition-title">
                    지
                  </span>
                  <span className="diary-food-meal-list-card-nutrition-kcal">
                    {card.food_fat}
                  </span>
                </span>
              </div>
            </Segment>
          )
        })}
      </div>
    )
  }
}

export default DiaryFoodList
