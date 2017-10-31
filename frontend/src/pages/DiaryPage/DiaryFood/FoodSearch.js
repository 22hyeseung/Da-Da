import React, { Component } from 'react'
import _ from 'lodash'
import {
  Button,
  Segment,
  Label,
  Grid,
  Input,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'
import {
  segmentDefault,
  submitBtn,
} from '../StyledDiaryCommon'
import {
  clearSelect,
  clearImgUrl,
} from '../../../actions/diaryFood'
import FoodSelectDetails from './FoodSearchDetails'
import FoodAdd from './FoodAdd'
import notyet from '../../../static/img/diary-food-search-notyet.svg'
import error from '../../../static/img/diary-search-error.svg'
import { connect } from 'react-redux'
import API_HOST from '../../../config'

class FoodSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKey: -1,
      isSearchMode: true,
      inputError: false,
      isLoading: false,
      btnState: false,
      isEmpty: true,

      userInput: '',
      results: [],
      resultKcal: '',
      finalKcal: '',
    }
  }

  componentDidMount() {
    this.textInput.focus()
    if (this.props.keyword) {
      this.setState({
        userInput: this.props.keyword,
      })
    }
  }

  // foodsSearch api : 현재 컴포넌트에서만 사용하므로 따로 action으로 분리하지 않았다.
  getFoodsList = () => {
    const { userInput } = this.state
    if (
      !userInput || // 입력값이 없으면 검색 안됨
      !userInput.indexOf(' ') // 공백시 검색 안됨
    ) {
      return this.setState({
        inputError: true,
        btnState: true,
      })
    }

    this.setState({
      isLoading: true,
      selectedKey: -1, // 두번째 검색시, label의 결과값을 제거 (select 초기화)
    })

    // 검색 get
    fetch(`${API_HOST}/foods?name=${userInput}`, {
      method: 'GET',
      headers: {
        Authorization: this.props.token,
      },
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          results: result,
          isEmpty: false, // 비어있을 때 나타나는 메세지를 위한 상태값
          isLoading: false,
          userInput: '',
        })
      })
  }

  // 입력하는 검색어 핸들러
  handleChange = e => {
    this.setState({
      userInput: e.target.value,
      inputError: false,
      btnState: false,
    })
  }

  // 입력시 keydown
  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.getFoodsList()
    }
  }

  // 검색 리스트 중 선택하는 핸들러
  // 검색 결과 배열 자체에 id값을 주어야함!!!
  handleSelect = key => {
    this.setState({ selectedKey: key })
    this.calculateKcal(key)
  }

  // 음식 칼로리를 계산하는 함수
  calculateKcal = key => {
    const { results } = this.state
    const result =
      results[key].food_carb * 4 +
      results[key].food_protein * 4 +
      results[key].food_fat * 9
    this.setState({
      resultKcal: result.toFixed(3), // 소수점 아래 3째짜리 이상으로 나오는 숫자를 처리한다.
    })
  }

  // search 토글
  toggleSearchMode = () => {
    this.setState({
      isSearchMode: !this.state.isSearchMode,
      userInput: '',
    }),
      this.props.clearSelect(),
      this.props.clearImgUrl()
  }

  render() {
    const {
      isLoading,
      isEmpty,
      inputError,
      btnState,
      results,
      isSearchMode,
      userInput,
      selectedKey,
      resultKcal,
    } = this.state
    const { foodAlbumResult, type } = this.props

    const sortResults = _.sortBy(
      results,
      'food_name_ko',
    )

    return (
      <div>
        {isSearchMode ? (
          <Segment
            style={{
              ...segmentDefault,
              ...Style.segmentSearch,
            }}
          >
            <Grid>
              {/* 검색창 첫번째 줄 시작 */}
              <Grid.Row>
                <Grid.Column
                  style={{
                    display: 'flex',
                  }}
                >
                  <Input
                    ref={input =>
                      (this.textInput = input)}
                    placeholder="오늘 무엇을 드셨나요?"
                    className="diary-food-search"
                    loading={isLoading}
                    error={inputError}
                    onChange={e =>
                      this.handleChange(e)}
                    value={userInput}
                    onKeyDown={
                      this.handleKeyPress
                    }
                    icon="search"
                  />
                  <Button
                    onClick={this.getFoodsList}
                    disabled={btnState}
                    style={{
                      ...submitBtn,
                      ...Style.searchBtn,
                    }}
                  >
                    검색
                  </Button>
                </Grid.Column>
                {/* <DiaryFoodSearchModal /> */}
              </Grid.Row>
              {/* 검색창 첫번째 줄 끝 */}

              {/* 검색창 두번째 줄 (검색결과) 시작 */}
              <Grid.Row
                style={Style.searchResultRow}
              >
                <div style={{ width: '100%' }}>
                  {/* 검색결과 시작 */}
                  {/* 초기상태가 비어있지 않으면 결과값을 내놓고, 비어있으면 초기화면을 내놓는 삼항연산자 */}
                  {/* 비어있지 않은 경우 1.검색결과 2.검색했지만 결과값이 없는 경우 3.초기 빈화면*/}
                  {!isEmpty ? (
                    <div>
                      <div
                        style={
                          Style.searchResultWrapper
                        }
                      >
                        <span
                          style={
                            Style.searchResult
                          }
                        >
                          검색결과
                          {results.length}건
                        </span>

                        {/* [UX] 결과값이 너무 많아 찾기 어려운 사용자에게 메세지 */}
                        {results.length > 100 ? (
                          <span
                            style={
                              Style.resultSmallMsg
                            }
                          >
                            검색결과가 너무 많이 나오신다면 조금 더
                            자세한 키워드로 검색해보세요.
                          </span>
                        ) : (
                          ''
                        )}
                      </div>
                      {results.length !== 0 ? (
                        // 1. 검색결과
                        <ul
                          style={{
                            margin: '0px',
                          }}
                        >
                          {sortResults.map(
                            (result, i) => {
                              const calculateKcal =
                                result.food_carb *
                                  4 +
                                result.food_protein *
                                  4 +
                                result.food_fat *
                                  9
                              return (
                                <li
                                  style={
                                    Style.searchResultList
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
                                  <div>
                                    <span className="diary-food-search-label-result-calculateKcal">
                                      {calculateKcal.toFixed(
                                        3,
                                      )}
                                    </span>
                                    <span className="diary-food-search-label-result-unit">
                                      kcal/{result.food_unit}
                                    </span>
                                  </div>
                                </li>
                              )
                            },
                          )}
                        </ul>
                      ) : (
                        // 2. 결과값이 없는경우
                        <div
                          style={Style.noResult}
                        >
                          <div
                            style={
                              Style.noResultWrapper
                            }
                          >
                            <span
                              style={{
                                ...Style.noResultMsg,
                                marginTop: '10px',
                              }}
                            >
                              검색결과가 없습니다.
                            </span>
                            <span
                              style={
                                Style.noResultMsg
                              }
                            >
                              좀 더 큰 범위의 키워드로
                              검색해보세요
                            </span>
                          </div>
                          <img
                            style={
                              Style.errorIcon
                            }
                            src={error}
                            alt="검색결과가 없어서 표시하는 이미지입니다"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    // 3. 초기 빈 화면
                    <div
                      style={Style.searchDefault}
                    >
                      <div>
                        <span
                          style={{
                            ...Style.searchDefaultMsg,
                            display: 'block',
                          }}
                        >
                          오늘 무엇을 드셨나요?
                        </span>
                        <span
                          style={
                            Style.searchDefaultMsg
                          }
                        >
                          아직 안먹으셨다면 검색!
                        </span>
                      </div>
                      {!foodAlbumResult ? (
                        <img
                          style={{ width: '17%' }}
                          src={notyet}
                          alt="검색 전 검색을 유도하는 이미지입니다"
                        />
                      ) : (
                        <div
                          style={{
                            overflow: 'hidden',
                            backgroundImage: `url(${foodAlbumResult})`,
                            backgroundSize:
                              'contain',
                            backgroundRepeat:
                              'no-repeat',
                            width: '30%',
                            display: 'flex',
                            backgroundPositionY:
                              '50%',

                            backgroundPositionX:
                              '100%',
                          }}
                        />
                      )}
                    </div>
                  )}
                  {/* 검색결과 끝 */}
                </div>
              </Grid.Row>
            </Grid>

            <Label
              attached="bottom"
              style={Style.searchLabel}
            >
              <FoodSelectDetails
                isSelected={selectedKey !== -1}
                calculateKcal={resultKcal}
                foodResult={results[selectedKey]}
                type={type}
                toggleSearchMode={
                  this.toggleSearchMode
                } // 토글 이벤트 props 내림
              />
            </Label>
          </Segment>
        ) : (
          <FoodAdd type={type} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    keyword: state.foodLogs.visionresultKeyword,
    foodAlbumResult:
      state.foodLogs.foodAlbumResult,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearSelect: () => dispatch(clearSelect()),
    clearImgUrl: () => dispatch(clearImgUrl()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FoodSearch)
