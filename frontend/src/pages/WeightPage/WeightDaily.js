import React, { Component } from 'react'
import {
  Header,
  Button,
  List,
  Input,
  Icon,
} from 'semantic-ui-react'
import ArrowDown from '../../static/img/weight-daily-arrowDown.svg'
import ArrowUp from '../../static/img/weight-daily-arrowUp.svg'
import * as Style from './StyledWeight'
import { connect } from 'react-redux'
import {
  postWeightToDB,
  fetchWeightFromDB,
  deleteWeightOfDB,
} from '../../actions/weight'
import trash from '../../static/img/trash_icon.svg'
// 리덕스 액션
import { setTodayDate } from '../../actions/setDate'
// helper: 오늘 날짜 API Query형식
import {
  todaysDate,
  dateStringForApiQuery,
  dateDashToKR,
} from '../../helper/date'

class WeightDaily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      isPostMode: false,
      isFocusMode: false,
      valueAlert: '',
      isPositiveNum: false,
      date: dateStringForApiQuery(
        this.props.dateState,
      ),
    }
  }

  componentWillMount() {
    this.props.setTodayDate(todaysDate)
    this.props.fetchWeight()
  }

  // weight 입력값 유효성 검사
  handleWeightValueChange = e => {
    if (e.target.value < 20) {
      return this.setState({
        valueAlert: '정말인가요? 다이어트 하시면 안 돼요!',
        isPositiveNum: true,
      })
    }
    this.setState({
      valueAlert: '',
      isPositiveNum: false,
      weight: e.target.value,
    })
  }

  // 입력창 여닫기
  togglePostingMode = e => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
    this.closeAndResetValue()
  }

  // 입력창 닫을 시 weight value 초기화
  closeAndResetValue = e =>
    this.setState({
      weight: '',
      // isPostMode: !this.state.isPostMode, -> 중복인것 같아 주석처리했어요!
    })

  // 입력 받은 체중 post
  createPayloadAndPostToDB = () => {
    const { weight } = this.state
    const {
      postWeightToDB,
      dateState,
    } = this.props

    // 입력 값 유효성 검사: 유효하지 않으면 input 비활성화
    if (!weight || weight < 1) {
      return this.setState({
        disabled: true,
      })
    }

    const requestBody = {
      kg: weight,
      date: dateStringForApiQuery(dateState),
    }
    postWeightToDB(requestBody)
    this.togglePostingMode()
  }

  deleteWeight = id => {
    // console.log(id)
    this.props.deleteWeight(id)
  }
  render() {
    const {
      isPostMode,
      isPositiveNum,
      loading,
      valueAlert,
    } = this.state
    const { weightListItem } = this.props

    return (
      <div>
        <div
          className="weight-daily"
          style={{ minHeight: '645px' }}
        >
          {/* title 시작 */}
          <Header style={Style.header}>
            <Header.Subheader
              style={Style.subHeader}
            >
              DAILY WEIGHT{' '}
            </Header.Subheader>
            체중기록
          </Header>
          {/* title 끝 */}

          {isPostMode ? (
            <div>
              <div className="weight-add-wrapper">
                <Input
                  focus
                  fluid
                  error={isPositiveNum}
                  type="number"
                  style={{
                    width: '100%',
                  }}
                  placeholder="몸무게를 입력하세요"
                  onChange={e =>
                    this.handleWeightValueChange(
                      e,
                    )}
                />

                <Button
                  style={{
                    ...Style.weightAddBtn,
                    marginLeft: '7px',
                    width: '84px',
                  }}
                  loading={loading}
                  disabled={isPositiveNum}
                  onClick={
                    this.createPayloadAndPostToDB
                  }
                >
                  입력
                </Button>
              </div>
              <span className="weight-alert">
                {valueAlert}
              </span>
            </div>
          ) : (
            <Button
              fluid
              style={Style.weightAddBtn}
              onClick={this.togglePostingMode}
            >
              <Icon
                name="plus"
                style={{ marginRight: '10px' }}
              />오늘 체중 기록하기
            </Button>
          )}
          {/* 리스트 시작 */}
          <List divided verticalAlign="bottom">
            {weightListItem.length !== 0
              ? weightListItem.map(
                  (item, index, arr) => {
                    // yyyy-mm-dd -> yyyy년 mm월 dd일
                    const dateRender = dateDashToKR(
                      item.diary_date,
                    )
                    return item.day_log_kg !==
                      null ? (
                      <List.Item
                        style={Style.listItem}
                      >
                        <List.Content
                          style={Style.date}
                        >
                          {dateRender}
                        </List.Content>
                        <div className="weight-daily-value">
                          <List.Content
                            style={
                              Style.weigthValue
                            }
                          >
                            {item.day_log_kg}
                          </List.Content>
                          <List.Content
                            className="weight-daily-value-unit"
                            style={
                              Style.weightUnit
                            }
                          >
                            kg
                          </List.Content>
                          <List.Content floated="right">
                            <img
                              src={ArrowUp}
                              alt="이전 몸무게보다 높음을 표시"
                            />
                            {/*arr[index - 1]
                              .day_log_kg <
                            arr[index]
                              .day_log_kg ? (
                              <img
                                src={ArrowUp}
                                alt="이전 몸무게보다 높음을 표시"
                              />
                            ) : (
                              <img
                                src={ArrowDown}
                                alt="이전 몸무게보다 낮음을 표시"
                              />
                            )*/}
                          </List.Content>
                          <List.Content floated="right">
                            <img
                              src={trash}
                              alt="삭제버튼"
                              style={{
                                cursor: 'pointer',
                              }}
                              onClick={() =>
                                this.deleteWeight(
                                  item.day_log_id,
                                )}
                            />
                          </List.Content>
                        </div>
                      </List.Item>
                    ) : (
                      ''
                    )
                  },
                )
              : ''}
          </List>
          {/* 리스트 끝 */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    weightListItem:
      state.weightList.weightListItem,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postWeightToDB: requestBody =>
      dispatch(postWeightToDB(requestBody)),
    setTodayDate: date =>
      dispatch(setTodayDate(date)),
    fetchWeight: () =>
      dispatch(fetchWeightFromDB()),
    deleteWeight: id =>
      dispatch(deleteWeightOfDB(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightDaily)
