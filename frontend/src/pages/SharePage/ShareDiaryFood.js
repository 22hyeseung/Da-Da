import React, { Component } from 'react'
import {
  Segment,
  Header,
  Label,
} from 'semantic-ui-react'
import ShareDiaryFoodList from './ShareDiaryFoodList'
import ShareDiaryFoodAlbum from './ShareDiaryFoodAlbum'
import foodIconDefault from '../../static/img/diary-food_default.svg'
import * as Style from './StyledDiaryFood'
import './ShareDiary.css'

class ShareDiaryFood extends Component {

  componentWillMount() {
    const breackfast = [];  //아침
    let breackfastKcal = 0;
    const lunch = [];       //점심
    let lunchKcal = 0;
    const dinner = [];      //저녁
    let dinnerKcal = 0;
    const desert = [];      //간식
    let desertKcal = 0;
    const foodPictureList = [];

    this.props.foodLogs.map(result => {
      if (result.eat_log_meal_tag === '아침') {
        breackfast.push(result)
      }else if (result.eat_log_meal_tag === '점심') {
        lunch.push(result)
      }else if (result.eat_log_meal_tag === '저녁') {
        dinner.push(result)
      }else if (result.eat_log_meal_tag === '간식') {
        desert.push(result)
      }

      if (result.eat_log_picture) {
        foodPictureList.push(result)
      }
    })

    this.props.reportKcal.map(result => {
      if (result.eat_log_meal_tag === '아침') {
        breackfastKcal = result['sum(kcal)']
      }else if (result.eat_log_meal_tag === '점심') {
        lunchKcal = result['sum(kcal)']
      }else if (result.eat_log_meal_tag === '저녁') {
        dinnerKcal = result['sum(kcal)']
      }else if (result.eat_log_meal_tag === '간식') {
        desertKcal = result['sum(kcal)']
      }
    })

    this.setState({
      breackfast,
      lunch,
      dinner,
      desert,
      breackfastKcal,
      lunchKcal,
      dinnerKcal,
      desertKcal,
      foodPictureList,
    })
  }

  render() {
    return (
      <Segment style={Style.foodBox}>
        {/* title 시작 */}
        <Header style={Style.header}>
          <Header.Subheader style={Style.subHeader}>
            FOOD DIARY
          </Header.Subheader>
          오늘의 식단 다이어리
          <img
            src={foodIconDefault}
            style={{
              height: '27px',
              marginBottom: '9px',
            }}
            alt="의미없는 식단 다이어리 표시 아이콘입니다."
          />
        </Header>
        {/* title 끝 */}

        {/* 끼니별 식단 다이어리 시작 */}

        {/* 아침 식사 시작 */}
        <Segment
          className="diary-food-meal"
          style={{
            paddingTop: '7px',
          }}
        >
          <div className="share-diary-food-label">
            <div className="diary-food-title">
              아침 식사
              <span className="diary-food-meal-count">
                {this.state.breackfast.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              아침 식사 섭취 칼로리
              <Label.Detail>{this.state.breackfastKcal} kcal</Label.Detail>
            </Label>
          </div>
          <ShareDiaryFoodList foodList={this.state.breackfast} />
        </Segment>
        {/* 아침 식사 끝 */}
        {/* 점심 식사 시작 */}
        <Segment
          className="diary-food-meal"
          style={{
            paddingTop: '7px',
          }}
        >
          <div className="share-diary-food-label">
            <div className="diary-food-title">
              점심 식사
              <span className="diary-food-meal-count">
                {this.state.lunch.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              점심 식사 섭취 칼로리
              <Label.Detail>{this.state.lunchKcal} kcal</Label.Detail>
            </Label>
          </div>
          <ShareDiaryFoodList foodList={this.state.lunch}/>
        </Segment>
        {/* 점심 식사 끝 */}
        {/* 저녁 식사 시작 */}
        <Segment
          className="diary-food-meal"
          style={{
            paddingTop: '7px',
          }}
        >
          <div className="share-diary-food-label">
            <div className="diary-food-title">
              저녁 식사
              <span className="diary-food-meal-count">
                {this.state.dinner.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              저녁 식사 섭취 칼로리
              <Label.Detail>{this.state.dinnerKcal} kcal</Label.Detail>
            </Label>
          </div>
          <ShareDiaryFoodList foodList={this.state.dinner} />
        </Segment>
        {/* 저녁 식사 끝 */}
        {/* 간식/기타 시작 */}
        <Segment
          className="diary-food-meal"
          style={{
            paddingTop: '7px',
          }}
        >
          <div className="share-diary-food-label">
            <div className="diary-food-title">
              간식/기타
              <span className="diary-food-meal-count">
                {this.state.desert.length}
              </span>
            </div>
            <Label style={Style.currentKcal}>
              간식/기타 섭취 칼로리
              <Label.Detail>{this.state.desertKcal} kcal</Label.Detail>
            </Label>
          </div>
          <ShareDiaryFoodList foodList={this.state.desert} />
        </Segment>
        {/* 간식/기타 끝 */}
        <ShareDiaryFoodAlbum foodPictureList={this.state.foodPictureList} />
        {/* 끼니별 식단 다이어리 끝 */}
      </Segment>
    )
  }
}

export default ShareDiaryFood
