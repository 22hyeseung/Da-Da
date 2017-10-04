import React, { Component } from 'react'
import {
  Card,
  Icon,
  Dropdown,
  List,
} from 'semantic-ui-react'
import bgImg from '../../static/img/recipe_box_img.png'

const options = [
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' },
  { key: 3, text: '3', value: '3' },
]

const IngredientBox = () => (
  <Card
    style={{
      position: 'absolute',
      top: '42px',
      left: '130px',
      backgroundImage: `url(${bgImg})`,
      backgroundSize: '100% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
    }}>
    <Card.Content>
      <Card.Header
        style={{
          fontSize: '14px',
          color: '#54698d',
          marginLeft: '12px',
        }}>
        <p style={{ margin: '7px 0 25px 0' }}>
          재료
        </p>
        <Icon name="user" size="large" />
        <Dropdown
          upward
          floating
          inline
          options={options}
          defaultValue="1"
        />
        <span style={{ fontWeight: '300' }}>
          인분
        </span>
      </Card.Header>
    </Card.Content>
    <Card.Content
      style={{
        width: '280px',
        height: '388px',
      }}>
      <div
        style={{
          width: '226px',
          height: '100px',
          fontSize: '14px',
          textAlign: 'right',
          marginLeft: '12px',
        }}>
        <List
          style={{
            display: 'inline-block',
            textAlign: 'left',
            color: '#16325c',
            fontWeight: '300',
          }}>
          <List.Item>계란</List.Item>
          <List.Item>코티지 치즈</List.Item>
          <List.Item>차전자피 가루</List.Item>
          <List.Item>버터 또는 코코넛 오일</List.Item>
        </List>
        <List
          style={{
            display: 'inline-block',
            lineHeight: '1.79',
            fontWeight: '700',
            textAlign: 'right',
            color: '#16325c',
            marginLeft: '49px',
          }}>
          <List.Item>1개</List.Item>
          <List.Item>50g</List.Item>
          <List.Item>1/4 Tsp</List.Item>
          <List.Item>15g</List.Item>
        </List>
        <span
          style={{
            fontSize: '12px',
            fontWeight: '300',
            lineHeight: '2.08',
            color: '#a8b7c7',
          }}>
          * Tsp : 테이블스푼
        </span>
      </div>
    </Card.Content>
  </Card>
)

export default IngredientBox
