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
import DiaryFoodSearchModal from './DiaryFoodSearchModal'
import DiaryFoodAdd from './DiaryFoodAdd'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'
import { connect } from 'react-redux'
import { toggleSearchMode } from '../../../actions/diaryFood'
import _ from 'lodash'
import dummyDB from './DBdiaryFoodSearch'
import faker from 'faker'
import * as Style from './StyledDiaryFood'

class Results extends Component {
  constructor(props) {
    super(props)
  }
  //list out articles received from parent
  render() {
    return (
      <div>
        <ul>
          {this.props.results.map(result => {
            return (
              <li key={result.food_id}>
                {result.food_name_ko}
                {result.food_carb}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class DiaryFoodSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        console.log(this.state.results)
      })
    this.clearForm()
  }

  clearForm = () => {
    console.log(this.state.userInput)
    this.setState({ userInput: '' })
    console.log(this.state.userInput)
  }

  handleChange = e => {
    this.setState({ userInput: e.target.value })
  }

  toggleSearchMode = () => {
    this.setState({
      isSearchMode: !this.state.isSearchMode,
    })
  }

  render() {
    const { isLoading, results } = this.state
    return (
      <div>
        {console.log(this.state.value)}
        {console.log(dummyDB.foodSource)}
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
                }}
              >
                <Results
                  results={this.state.results}
                />
              </Grid.Row>
            </Grid>
            <Label
              attached="bottom"
              style={Style.searchLabel}
            >
              <div className="diary-food-search-label">
                <div className="diary-food-search-label-result">
                  <span className="diary-food-search-label-result-title">
                    {this.state.title}
                  </span>
                  <span className="diary-food-search-label-result-kcal">
                    {this.state.price}
                  </span>
                  {this.state.title ? (
                    <div className="diary-food-search-label-result-input">
                      <img
                        src={multiplyIcon}
                        className="diary-food-calculateIcon"
                        alt="곱하기 모양의 아이콘입니다."
                      />
                      <Input
                        placeholder={
                          this.state.unit
                        }
                        style={{ width: '84px' }}
                      />
                      <img
                        src={returnIcon}
                        className="diary-food-calculateIcon"
                        alt="= 모양의 아이콘입니다."
                      />
                      <div className="diary-food-search-label-result-wrapper">
                        <span className="diary-food-search-label-result-calculateKcal">
                          {this.state.price * 3}
                        </span>
                        <span className="diary-food-search-label-result-unit">
                          kcal
                        </span>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleSearchMode: () =>
//       dispatch(toggleSearchMode()),
//   }
// }

export default DiaryFoodSearch
