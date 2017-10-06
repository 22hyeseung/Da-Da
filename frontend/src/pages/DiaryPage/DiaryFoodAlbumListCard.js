import React, { Component } from 'react'
import {
  Segment,
  Label,
  Icon,
  Button,
  Popup,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodAlbumListCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment
        style={{
          boxShadow: 'none',
          marginTop: '0px',
          border: '1px solid #d8dde6',
          width: '210px',
          marginRight: '14px',
        }}
      >
        <div className="diary-food-meal-list-card-firstRow">
          <p className="diary-food-meal-list-card-firstRow-title">
            현미밥
          </p>
          <Popup
            trigger={
              <Icon
                name="setting"
                style={{
                  margin: '0px 0px 0px 6px',
                  color: '#A8B7C7',
                  cursor: 'pointer',
                }}
              />
            }
            flowing
            hoverable
            style={{
              padding: '1px',
            }}
          >
            <Button.Group>
              <Button
                icon="edit"
                style={{
                  padding: '9px',
                  backgroundColor: '#fff',
                }}
              />
              <Button
                icon="trash outline"
                style={{
                  padding: '9px',
                  backgroundColor: '#fff',
                }}
              />
            </Button.Group>
          </Popup>
        </div>
        <p className="diary-food-meal-list-card-calory">
          100
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
              100
            </span>
          </span>
          <span className="diary-food-meal-list-card-nutrition-wrapper">
            <span className="diary-food-meal-list-card-nutrition-title">
              단
            </span>
            <span className="diary-food-meal-list-card-nutrition-kcal">
              100
            </span>
          </span>
          <span className="diary-food-meal-list-card-nutrition-wrapper">
            <span className="diary-food-meal-list-card-nutrition-title">
              지
            </span>
            <span className="diary-food-meal-list-card-nutrition-kcal">
              100
            </span>
          </span>
        </div>
      </Segment>
    )
  }
}

export default DiaryFoodAlbumListCard
