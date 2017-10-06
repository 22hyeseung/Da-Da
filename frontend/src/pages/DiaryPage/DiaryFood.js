import React, { Component } from 'react'
import {
  Segment,
  Header,
  Button,
  Label,
} from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
import DiaryFoodList from './DiaryFoodList'
import DiaryFoodSearch from './DiaryFoodSearch'
import DiaryFoodAlbum from './DiaryFoodAlbum'
import foodImg from '../../static/img/food_bg.png'
import MdAdd from 'react-icons/lib/md/add'
import foodIconDefault from '../../static/img/diary-food_default.svg'

class DiaryFood extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment
        style={{
          padding: '33px 36px 21px 36px',
          boxShadow: 'none',
          border: '1px solid #D8DDE6',
          backgroundImage: `url(${foodImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: '34%',
        }}
      >
        {/* title 시작 */}
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            color: '#16325C',
            marginBottom: '42px',
            fontFamily: 'Spoqa Han Sans',
          }}
        >
          <Header.Subheader
            style={{
              fontFamily: 'montserrat',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1f2e79',
            }}
          >
            FOOD DIARY
          </Header.Subheader>
          오늘의 식단 다이어리
          <img
            src={foodIconDefault}
            style={{
              height: '27px',
              marginBottom: '9px',
            }}
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
            <Label
              style={{
                height: '25px',
                borderRadius: '43px',
                padding: '4px 26px',
                fontWeight: '100',
                fontSize: '14px',
                lineHeight: 'inherit',
                backgroundColor:
                  'rgba(245,244,240,0.86)',
                color: '#16325c',
              }}
            >
              현재 아침 식사 섭취 칼로리
              <Label.Detail>
                100 kcal
              </Label.Detail>
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
            <Label
              style={{
                height: '25px',
                borderRadius: '43px',
                padding: '4px 26px',
                fontWeight: '100',
                fontSize: '14px',
                lineHeight: 'inherit',
                backgroundColor:
                  'rgba(245,244,240,0.86)',
                color: '#16325c',
              }}
            >
              현재 점심 식사 섭취 칼로리
              <Label.Detail>
                100 kcal
              </Label.Detail>
            </Label>
          </div>
          <DiaryFoodSearch />
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
            <Label
              style={{
                height: '25px',
                borderRadius: '43px',
                padding: '4px 26px',
                fontWeight: '100',
                fontSize: '14px',
                lineHeight: 'inherit',
                backgroundColor:
                  'rgba(245,244,240,0.86)',
                color: '#16325c',
              }}
            >
              현재 저녁 식사 섭취 칼로리
              <Label.Detail>
                100 kcal
              </Label.Detail>
            </Label>
          </div>
          <DiaryFoodList />
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
            <Label
              style={{
                height: '25px',
                borderRadius: '43px',
                padding: '4px 26px',
                fontWeight: '100',
                fontSize: '14px',
                lineHeight: 'inherit',
                backgroundColor:
                  'rgba(245,244,240,0.86)',
                color: '#16325c',
              }}
            >
              현재 간식/기타 섭취 칼로리
              <Label.Detail>
                100 kcal
              </Label.Detail>
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
}

export default DiaryFood
