import React, { Component } from 'react'
import {
  Button,
  Segment,
  Search,
  Label,
  Grid,
  Input,
} from 'semantic-ui-react'
import DiaryFoodSearchModal from './DiaryFoodSearchModal'
import multiplyIcon from '../../static/img/diary-multiply.svg'
import returnIcon from '../../static/img/diary-return.svg'
import _ from 'lodash'
import faker from 'faker'
import * as Style from './StyledDiaryFood'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  price: faker.finance.amount(0, 100, 2),
}))

class DiaryFoodSearch extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: '',
      title: '',
      price: '',
      unit: 'g',
    })

  handleResultSelect = (e, { result }) =>
    this.setState({
      value: result.title,
      title: result.title,
      price: result.price,
    })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      // if (this.state.value.length < 1)
      //   return this.resetComponent()

      const re = new RegExp(
        _.escapeRegExp(this.state.value),
        'i',
      )
      const isMatch = result =>
        re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, results } = this.state
    return (
      <Segment
        style={{
          ...Style.segmentDefault,
          overflow: 'hidden',
          height: '331px',
        }}
      >
        <Grid>
          <Grid.Column
            width={15}
            style={{ paddingRight: '21px' }}
          >
            <Search
              className="diary-food-search"
              loading={isLoading}
              onResultSelect={
                this.handleResultSelect
              }
              onSearchChange={
                this.handleSearchChange
              }
              results={results}
              {...this.props}
            />
          </Grid.Column>
          <DiaryFoodSearchModal />
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
                    placeholder={this.state.unit}
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
    )
  }
}

export default DiaryFoodSearch
