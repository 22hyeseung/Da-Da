import React from 'react'
import {
  Segment,
  Header,
  Label,
} from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
import DiaryFoodList from './DiaryFoodList'
import DiaryFoodSearch from './DiaryFoodSearch'
import DiaryFoodAlbum from './DiaryFoodAlbum'
import foodIconDefault from '../../../static/img/diary-food_default.svg'
import * as Style from './StyledDiaryFood'

{
  /* <DiaryFood
  type="아침"
/>
<DiaryFood
  type="점심"
/>
<DiaryFood
  type="저녁"
/> */
}

const DiaryFood = () => {
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
      {/* 아침식사 시작 */}
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
            현재 아침 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <DiaryFoodAdd />
      </Segment>
      {/* 아침식사 끝 */}

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
            현재 점심 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <DiaryFoodAdd />
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
            현재 저녁 식사 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <DiaryFoodAdd />
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
            현재 간식/기타 섭취 칼로리
            <Label.Detail>100 kcal</Label.Detail>
          </Label>
        </div>
        <DiaryFoodAdd />
      </Segment>
      {/* 간식/기타 끝 */}
      <DiaryFoodAlbum />
      {/* 끼니별 식단 다이어리 끝 */}
    </Segment>
  )
}

export default DiaryFood
