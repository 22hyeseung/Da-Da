import React from 'react'
import {
  Button,
  Input,
  List,
  Divider,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import '../Diary.css'
import returnIcon from '../../../static/img/diary-return.svg'
import rootApi from '../../../config'
import notyet from '../../../static/img/diary-fitness-search-notyet.svg'
import error from '../../../static/img/diary-search-error.svg'
import { connect } from 'react-redux'

class DiaryFitnessSearch extends React.Component {
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
      token: `Bearer ${this.props.token}`,
    }
  }
  getFitnessesList = () => {
    if (
      !this.state.userInput || // 입력값이 없으면 검색 안됨
      !this.state.userInput.indexOf(' ') // 공백시 검색 안됨
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
      `${rootApi}/exercises/search?name=${this
        .state.userInput}`,
      {
        method: 'GET',
        headers: {
          Authorization: this.state.token,
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
              value={this.state.userInput}
              onKeyDown={this.handleKeyPress}
            />
            <img
              src={multiplyIcon}
              alt="곱하기 모양의 아이콘입니다."
              style={{ margin: '0px 18px' }}
            />
          </List.Item>
          <List.Item
            style={Style.listItemRightWrap}
          >
            <List.Content
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Input placeholder="얼마나 운동하셨나요?" />
              <img
                src={returnIcon}
                alt="= 모양의 아이콘입니다."
              />
            </List.Content>
          </List.Item>
          <List.Item
            style={Style.listItemRightAlign}
          >
            <List.Content
              style={Style.textSmall_Input}
            >
              <span style={Style.textBig}>
                0
              </span>kcal
            </List.Content>
          </List.Item>
        </List>
        <List
          style={{
            width: '54%',
            marginLeft: '14px',
          }}
        >
          <ul
            style={{
              listStyle: 'none',

              paddingRight: '14px',
            }}
          >
            {!this.state.isEmpty ? (
              <div>
                {this.state.results.length !==
                0 ? (
                  <div>
                    <div
                      style={
                        Style.searchResultWrapper
                      }
                    >
                      <span
                        style={Style.searchResult}
                      >
                        검색결과{' '}
                        {
                          this.state.results
                            .length
                        }
                      </span>
                      <span />
                    </div>
                    <div
                      style={{
                        height: '185px',
                        overflow: 'auto',
                      }}
                    >
                      {this.state.results.map(
                        (result, i) => {
                          return (
                            <li
                              style={{
                                display: 'flex',
                                justifyContent:
                                  'space-between',
                                padding: '7px',
                                margin: '7px 0px',
                                borderBottom:
                                  '1px solid #d8dde6',
                                cursor: 'pointer',
                              }}
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
                    width: '26%',
                    marginTop: '21px',
                  }}
                  src={notyet}
                  alt="검색 전 검색을 유도하는 이미지입니다"
                />
              </div>
            )}
          </ul>
        </List>
        <div style={Style.buttonWrap}>
          <Button basic style={Style.button}>
            취소
          </Button>
          <Button style={Style.submitButton}>
            등록
          </Button>
        </div>
        <Divider />
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
  DiaryFitnessSearch,
)
