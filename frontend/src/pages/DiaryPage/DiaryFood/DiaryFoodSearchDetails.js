import React, { Component } from 'react'
import * as Style from './StyledDiaryFood'
import { Input } from 'semantic-ui-react'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'

export default class FoodSelectDetails extends Component {
  render() {
    const details = (
      <div className="diary-food-search-label-result">
        <span className="diary-food-search-label-result-title">
          {this.props.foodResult.food_name_ko}
        </span>
        <span className="diary-food-search-label-result-kcal">
          {this.props.foodResult.food_protein}
        </span>
        {/* {this.state.title ? ( */}
        <div className="diary-food-search-label-result-input">
          <img
            src={multiplyIcon}
            className="diary-food-calculateIcon"
            alt="곱하기 모양의 아이콘입니다."
          />
          <Input
            placeholder={
              this.props.foodResult.food_unit
            }
            style={{ width: '84px' }}
          />
          <img
            src={returnIcon}
            className="diary-food-calculateIcon"
            alt="= 모양의 아이콘입니다."
          />
          <div className="diary-food-search-label-result-wrapper">
            <span className="diary-food-search-label-result-calculateKcal">
              {this.props.foodResult
                .food_protein * 3}
            </span>
            <span className="diary-food-search-label-result-unit">
              kcal
            </span>
          </div>
        </div>
        {/* // ) : (
        //   ''
        // )} */}
      </div>
    )
    const blank = <div>blank</div>
    return (
      <div>
        {this.props.isSelected ? details : blank}
      </div>
    )
  }
}

FoodSelectDetails.defaultProps = {
  foodResult: {
    food_name_ko: '',
    food_unit: '',
    food_protein: '',
  },
}
