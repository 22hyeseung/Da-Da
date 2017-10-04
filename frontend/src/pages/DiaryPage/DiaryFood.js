import React, { Component } from 'react'
import {
  Segment,
  Header,
  Button,
} from 'semantic-ui-react'
import DiaryFoodAdd from './DiaryFoodAdd'
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
          padding: '33px 36px',
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
        아침식사
        <DiaryFoodAdd />
        점심식사
        <DiaryFoodAdd />
        저녁식사
        <DiaryFoodAdd />
        간식식사
        <DiaryFoodAdd />
      </Segment>
    )
  }
}

export default DiaryFood
