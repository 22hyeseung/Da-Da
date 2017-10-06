import React, { Component } from 'react'
import {
  Segment,
  Label,
  Icon,
  Header,
  Popup,
  Button,
  Grid,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="diary-food-meal-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
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
                trigger={<Icon name="setting" />}
                flowing
                hoverable
              >
                <Grid
                  centered
                  divided
                  columns={2}
                >
                  <Grid.Row textAlign="center">
                    수정하기
                  </Grid.Row>
                  <Grid.Row textAlign="center">
                    삭제하기
                  </Grid.Row>
                </Grid>
              </Popup>
            </div>
            <p className="diary-food-meal-list-card-calory">
              100kcal
            </p>
            <div className="diary-food-meal-list-card-nutritions">
              <span className="diary-food-meal-list-card-nutrition-wrapper">
                <span>탄</span>
                <span>100</span>
              </span>
              <span>
                <span>단</span>
                <span>100</span>
              </span>
              <span>
                <span>지</span>
                <span>100</span>
              </span>
            </div>
          </Segment>
          <Segment
            style={{
              boxShadow: 'none',
              marginTop: '0px',
              border: '1px solid #d8dde6',
              width: '210px',
              marginRight: '14px',
            }}
          >
            1
          </Segment>
          <Segment
            style={{
              boxShadow: 'none',
              marginTop: '0px',
              border: '1px solid #d8dde6',
              width: '210px',
              marginRight: '14px',
            }}
          >
            1
          </Segment>
          <Segment
            style={{
              boxShadow: 'none',
              marginTop: '0px',
              border: '1px solid #d8dde6',
              width: '210px',
              marginRight: '14px',
            }}
          >
            1
          </Segment>
          <Segment
            style={{
              boxShadow: 'none',
              marginTop: '0px',
              border: '1px solid #d8dde6',
              width: '210px',
            }}
          >
            1
          </Segment>
        </div>
      </div>
    )
  }
}

export default DiaryFoodList
