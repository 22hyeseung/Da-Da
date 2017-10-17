import React, { Component } from 'react'
import {
  Button,
  Segment,
  Search,
  Label,
  Grid,
  Input,
  List,
} from 'semantic-ui-react'
import * as Styled from './StyledDiaryFood'
import FoodSelectDetails from './DiaryFoodSearchDetails'
import DiaryFoodSearchModal from './DiaryFoodSearchModal'
import DiaryFoodAdd from './DiaryFoodAdd'
import { connect } from 'react-redux'
import { toggleSearchMode } from '../../../actions/diaryFood'
import _ from 'lodash'
import dummyDB from './DBdiaryFoodSearch'
import faker from 'faker'
import * as Style from './StyledDiaryFood'

class DiaryFoodSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKey: -1,
      isSearchMode: true,
      isLoading: false,
      userInput: '',
      token: `Bearer ${token}`, // 현재 로그인 branch합치기 전이라 저장된 토큰값이 없습니다. 테스트를 원하실 경우 자신의 토큰값을 넣으시면 됩니다.
      results: [],
    }
  }
  getArticle = () => {
    fetch(
      'https://api.downmix.net/foods?name=' +
        this.state.userInput,
      {
        method: 'GET',
        headers: {
          Authorization: this.state.token,
        },
      },
    )
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({
          results: result,
        })
      })
    this.clearForm()
  }

  clearForm = () => {
    this.setState({ userInput: '' })
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value })
  }

  // 검색 결과 배열 자체에 id값을 주어야함!!!
  handleSelect = key => {
    this.setState({ selectedKey: key })
  }

  toggleSearchMode = () => {
    this.setState({
      isSearchMode: !this.state.isSearchMode,
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <div>
        {this.state.isSearchMode ? (
          <Segment
            style={{
              ...Style.segmentDefault,
              overflow: 'hidden',
              height: '331px',
            }}
          >
            <Grid>
              <Grid.Row>
                <Grid.Column
                  width={15}
                  style={{
                    paddingRight: '21px',
                    display: 'flex',
                  }}
                >
                  <Input
                    placeholder="오늘 무엇을 드셨나요?"
                    className="diary-food-search"
                    loading={isLoading}
                    onChange={this.handleChange}
                  />
                  <Button
                    onClick={this.getArticle}
                    color="black"
                    style={{
                      width: '100px',
                      marginLeft: '14px',
                    }}
                  >
                    검색하기
                  </Button>
                </Grid.Column>
                <DiaryFoodSearchModal />
              </Grid.Row>
              <Grid.Row
                style={{
                  overflow: 'auto',
                  height: '210px',
                  padding: '0px 21px',
                }}
              >
                {/* 검색결과 시작 */}
                <div style={{ width: '100%' }}>
                  <ul
                    selection
                    style={{ margin: '0px' }}
                  >
                    {this.state.results.map(
                      (result, i) => {
                        return (
                          <li
                            style={
                              Styled.SearchResultList
                            }
                            key={i}
                            onClick={() =>
                              this.handleSelect(
                                i,
                              )}
                          >
                            <span>
                              {
                                result.food_name_ko
                              }
                            </span>
                            <span>
                              {result.food_carb}
                            </span>
                          </li>
                        )
                      },
                    )}
                  </ul>
                </div>
                {/* 검색결과 끝 */}
              </Grid.Row>
            </Grid>

            <Label
              attached="bottom"
              style={Style.searchLabel}
            >
              <div className="diary-food-search-label">
                <FoodSelectDetails
                  isSelected={
                    this.state.selectedKey != -1
                  }
                  foodResult={
                    this.state.results[
                      this.state.selectedKey
                    ]
                  }
                />

                <div>
                  <Button
                    basic
                    style={{
                      ...Style.cancelBtn,
                      marginRight: '9px',
                    }}
                    onClick={
                      this.toggleSearchMode
                    }
                  >
                    취소
                  </Button>
                  <Button
                    className="diary-food-meal-submitBtn"
                    style={Style.submitBtn}
                  >
                    등록
                  </Button>
                </div>
              </div>
            </Label>
          </Segment>
        ) : (
          <DiaryFoodAdd />
        )}
      </div>
    )
  }
}

export default DiaryFoodSearch
