import React, { Component } from 'react'
import {
  Input,
  Icon,
  Button,
} from 'semantic-ui-react'
import { postFoodToDB } from '../../../actions/diaryFood'
import { connect } from 'react-redux'
import * as Styled from './StyledDiaryFood'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'

class FoodSelectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finalKcal: '-',
      inputAmount: '',
      meal_tag: '',
    }
  }
  handleAmount = e => {
    const finalKcal =
      this.props.calculateKcal * e.target.value
    this.setState({
      finalKcal: finalKcal.toFixed(3),
      inputAmount: e.target.value,
    })
  }

  // 태그명에 따라서 Enum 타입으로 변환
  componentWillMount() {
    if (this.props.type == '아침') {
      return this.setState({
        meal_tag: 1,
      })
    }
    if (this.props.type == '점심') {
      return this.setState({
        meal_tag: 2,
      })
    }
    if (this.props.type == '저녁') {
      return this.setState({
        meal_tag: 3,
      })
    }
    if (this.props.type == '간식') {
      return this.setState({
        meal_tag: 4,
      })
    }
  }

  createPayloadAndPostToDB = () => {
    this.props.postFoodToDB({
      food_id: this.props.foodResult.food_id,
      meal_tag: `${this.state.meal_tag}`,
      amount: this.state.inputAmount * 1,
      picture: null,
      date: 20171019,
    })
    this.props.toggleSearchMode()
    // console.log(this.props.foodResult.food_id)
    // console.log(this.state.meal_tag)
    // console.log(this.state.inputAmount * 1)
  }
  render() {
    const details = (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
      <div className="diary-food-search-label">
        <div className="diary-food-search-label-result">
          {this.props.isSelected
            ? details
            : this.props.foodResult ? '' : blank}
        </div>
        <div>
          <Button
            basic
            style={{
              ...Styled.cancelBtn,
              marginRight: '9px',
            }}
            onClick={this.toggleSearchMode}
          >
            취소
          </Button>
          <Button
            className="diary-food-meal-submitBtn"
            style={Styled.submitBtn}
            onClick={
              this.createPayloadAndPostToDB
            }
          >
            등록
          </Button>
        </div>
      </div>
    )
  }
}

FoodSelectDetails.defaultProps = {
  foodResult: {
    food_id: '',
    food_name_ko: '',
    food_unit: '',
    food_protein: '',
    food_carb: '',
    food_fat: '',
  },
}

const mapDispatchToProps = dispatch => {
  return {
    postFoodToDB: payload =>
      dispatch(postFoodToDB(payload)),
  }
}

export default connect(null, mapDispatchToProps)(
  FoodSelectDetails,
)
