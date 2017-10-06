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
import MdAdd from 'react-icons/lib/md/add'
import cameraIcon from '../../static/img/diary-camera-icon.svg'
import multiplyIcon from '../../static/img/diary-multiply.svg'
import returnIcon from '../../static/img/diary-return.svg'
import _ from 'lodash'
import faker from 'faker'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  price: faker.finance.amount(0, 100, 2),
}))

class DiaryFoodSearch extends Component {
  constructor(props) {
    super(props)
  }
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
    const {
      isLoading,
      value,
      results,
    } = this.state
    return (
      <Segment
        style={{
          boxShadow: 'none',
          marginTop: '0px',
          border: '1px solid #d8dde6',
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
          style={{
            backgroundColor: 'white',
            borderTop: '1px solid #D8DDE6',
            fontFamily: 'Spoqa Han Sans',
          }}
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
                  />
                  <Input
                    placeholder={this.state.unit}
                    style={{ width: '84px' }}
                  />
                  <img
                    src={returnIcon}
                    className="diary-food-calculateIcon"
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
                  fontFamily: 'Spoqa Han Sans',
                  fontWeight: '100',
                  padding: '10px 34px',
                  marginRight: '9px',
                }}
              >
                취소
              </Button>
              <Button
                className="diary-food-meal-submitBtn"
                style={{
                  color: 'white',
                  fontFamily: 'Spoqa Han Sans',
                  fontWeight: '100',
                  padding: '10px 34px',
                  backgroundImage:
                    'linear-gradient(249deg, #485563, #29323c)',
                }}
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
