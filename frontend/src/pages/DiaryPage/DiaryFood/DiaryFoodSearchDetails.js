import React, { Component } from 'react'
import * as Style from './StyledDiaryFood'
import { Input, Icon } from 'semantic-ui-react'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'

export default class FoodSelectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalKcal: '-',
    }
  }
  handleAmount = e => {
    const finalKcal =
      this.props.calculateKcal * e.target.value
    this.setState({
      finalKcal: finalKcal.toFixed(3),
    })
  }

  render() {
    const details = (
      <div className="diary-food-search-label-result">
        <span className="diary-food-search-label-result-title">
          {this.props.foodResult.food_name_ko}
        </span>
        <span className="diary-food-search-label-result-kcal">
          {this.props.calculateKcal}
        </span>
        <div className="diary-food-search-label-result-input">
          <img
            src={multiplyIcon}
            className="diary-food-calculateIcon"
            alt="곱하기 모양의 아이콘입니다."
          />
          <Input
            placeholder="얼마나 먹었나요?"
            onChange={e => this.handleAmount(e)}
            style={{ width: '105px' }}
          />
          <span className="diary-food-search-label-result-unit">
            {this.props.foodResult.food_unit}
          </span>
          <img
            src={returnIcon}
            className="diary-food-calculateIcon"
            alt="= 모양의 아이콘입니다."
          />
          <div className="diary-food-search-label-result-wrapper">
            <span className="diary-food-search-label-result-calculateKcal">
              {this.state.finalKcal}
            </span>
            <span className="diary-food-search-label-result-unit">
              kcal
            </span>
          </div>
        </div>
      </div>
    )
    const blank = (
      <span className="diary-food-search-label-result-title">
        <Icon color="teal" name="check" />
        먹은 음식을 선택하세요.
      </span>
    )
    return (
      <div>
        {this.props.isSelected
          ? details
          : this.props.foodResult ? '' : blank}
      </div>
    )
  }
}

FoodSelectDetails.defaultProps = {
  foodResult: {
    food_name_ko: '',
    food_unit: '',
    food_protein: '',
    food_carb: '',
    food_fat: '',
  },
}
