import React from 'react'
import API_HOST from '../../../config'
import { connect } from 'react-redux'

// 스타일
import {
  Input,
  List,
  Button,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'
import '../Diary.css'
import { submitBtn } from '../StyledDiary'

// 아이콘
import notyet from '../../../static/img/diary-fitness-search-notyet.svg'
import error from '../../../static/img/diary-search-error.svg'

// 컴포넌트
import FitnessSearchDetails from './FitnessSearchSelect'

class FitnessSearch extends React.Component {
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

  handleSelect = key => {
    this.setState({ selectedKey: key })
  }

  getFitnessesList = () => {
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
    fetch(
      `${API_HOST}/exercises/search?name=${this
        .state.userInput}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props
            .token}`,
        },
      },
    )
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

  handleChange = e => {
    this.setState({
      userInput: e.target.value,
    })
    if (e.target.value)
      this.setState({
        inputError: false,
        btnState: false,
      })
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.getFitnessesList()
    }
  }

  handleSelect = key => {
    this.setState({ selectedKey: key })
  }

  render() {
    const {
      results,
      isEmpty,
      selectedKey,
      userInput,
      btnState,
    } = this.state

    return (
      <div>
        <List horizontal style={Style.listWrap}>
          <List.Item
            style={Style.listItemLeftWrap}
          >
            <Input
              icon="search"
              placeholder="어떤 종류의 운동을 하셨나요?"
              className="diary-fitness-search"
              style={Style.inputStyle}
              onChange={this.handleChange}
              value={userInput}
              onKeyDown={this.handleKeyPress}
            />
            <Button
              onClick={this.getFitnessesList}
              disabled={btnState}
              style={{
                ...submitBtn,
                width: '100px',
                marginLeft: '14px',
              }}
            >
              검색
            </Button>
          </List.Item>
        </List>
        <List
          style={{
            width: '100%',
            marginLeft: '14px',
          }}
        >
          <ul style={Style.searchResultUl}>
            {!isEmpty ? (
              <div>
                {results.length !== 0 ? (
                  <div>
                    <div
                      style={
                        Style.searchResultWrapper
                      }
                    >
                      <span
                        style={Style.searchResult}
                      >
                        검색결과 {results.length}
                      </span>
                      <span />
                    </div>
                    <div
                      style={{
                        height: '185px',
                        overflow: 'auto',
                      }}
                    >
                      {results.map(
                        (result, i) => {
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
                              <span
                                style={{
                                  fontColor:
                                    '#16325c',
                                }}
                              >
                                {
                                  result.exercise_name
                                }
                              </span>
                              <span
                                style={{
                                  fontFamily:
                                    'Montserrat-bold',
                                  fontSize:
                                    '28px',
                                }}
                              >
                                {result.exercise_burn_kcal}{' '}
                                <span
                                  style={{
                                    fontFamily:
                                      'Montserrat-bold',
                                    fontSize:
                                      '14px',
                                  }}
                                >
                                  kcal
                                </span>
                                <span
                                  style={{
                                    fontSize:
                                      '14px',
                                  }}
                                >
                                  /분
                                </span>
                              </span>
                            </li>
                          )
                        },
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={Style.noResult}>
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
                        style={Style.noResultMsg}
                      >
                        좀 더 큰 범위의 키워드로 검색해보세요
                      </span>
                    </div>
                    <img
                      style={Style.errorIcon}
                      src={error}
                      alt="검색결과가 없어서 표시하는 이미지입니다"
                    />
                  </div>
                )}
              </div>
            ) : (
              // 3. 초기 빈 화면
              <div style={Style.searchDefault}>
                <div
                  style={{ textAlign: 'center' }}
                >
                  <span
                    style={{
                      ...Style.searchDefaultMsg,
                      display: 'block',
                    }}
                  >
                    어떤 운동을 하셨나요?
                  </span>
                  <span
                    style={Style.searchDefaultMsg}
                  >
                    운동 종류를 검색해보세요!
                  </span>
                </div>
                <img
                  style={{
                    width: '14%',
                    marginTop: '21px',
                  }}
                  src={notyet}
                  alt="검색 전 검색을 유도하는 이미지입니다"
                />
              </div>
            )}
          </ul>
        </List>
        <FitnessSearchDetails
          isSelected={selectedKey !== -1}
          fitnessResult={results[selectedKey]}
          toggleSearchMode={
            this.props.isSearchMode
          } // 토글 이벤트 props 내림
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(
  FitnessSearch,
)
