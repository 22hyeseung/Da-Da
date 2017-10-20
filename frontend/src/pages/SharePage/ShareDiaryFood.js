import React from 'react'
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

const ShareDiaryFood = () => {
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
        <div className="diary-food-label">
          <div className="diary-food-title">
            아침 식사
            <span className="diary-food-meal-count">
              0
            </span>
          </div>
          <Label style={Style.currentKcal}>
            아침 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <ShareDiaryFoodList />
      </Segment>
      {/* 아침 식사 끝 */}
      {/* 점심 식사 시작 */}
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        <div className="diary-food-label">
          <div className="diary-food-title">
            점심 식사
            <span className="diary-food-meal-count">
              0
            </span>
          </div>
          <Label style={Style.currentKcal}>
            점심 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <ShareDiaryFoodList />
      </Segment>
      {/* 점심 식사 끝 */}
      {/* 저녁 식사 시작 */}
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        <div className="diary-food-label">
          <div className="diary-food-title">
            저녁 식사
            <span className="diary-food-meal-count">
              0
            </span>
          </div>
          <Label style={Style.currentKcal}>
            저녁 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <ShareDiaryFoodList />
      </Segment>
      {/* 저녁 식사 끝 */}
      {/* 간식/기타 시작 */}
      <Segment
        className="diary-food-meal"
        style={{
          paddingTop: '7px',
        }}
      >
        <div className="diary-food-label">
          <div className="diary-food-title">
            간식/기타
            <span className="diary-food-meal-count">
              0
            </span>
          </div>
          <Label style={Style.currentKcal}>
            간식/기타 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <ShareDiaryFoodList />
      </Segment>
      {/* 간식/기타 끝 */}
      <ShareDiaryFoodAlbum />
      {/* 끼니별 식단 다이어리 끝 */}
    </Segment>
  )
}

export default ShareDiaryFood
