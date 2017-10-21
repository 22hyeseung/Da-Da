import React, { Component } from 'react'
import {
  Header,
  Button,
  List,
  Input,
  Icon,
} from 'semantic-ui-react'
import ArrowDown from '../../static/img/weight-daily-arrowDown.svg'
import * as Style from './StyledWeight'
import { connect } from 'react-redux'
import {
  postWeightToDB,
  fetchWeightFromDB,
} from '../../actions/weight'
import trash from '../../static/img/trash_icon.svg'
// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../helper/date'

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
    this.props.fetchWeight()
  }

  handleWeightValueChange = e => {
    if (e.target.value < 1) {
      return this.setState({
        valueAlert: '1 이상의 값을 입력하세요 ',
        isPositiveNum: true,
      })
    }
    this.setState({
      valueAlert: '',
      isPositiveNum: false,
      weight: e.target.value,
    })
  }

  togglePostingMode = e => {
    this.setState({
      isPostMode: !this.state.isPostMode,
    })
    this.closeAndResetValue()
  }

  closeAndResetValue = e =>
    this.setState({
      date: '',
      weight: '',
      isPostMode: !this.state.isPostMode,
    })

  createPayloadAndPostToDB = () => {
    if (
      !this.state.weight ||
      this.state.weight < 1
    ) {
      return this.setState({
        disabled: true,
      })
    }
    // console.log(this.props.dateState)
    // console.log(this.state.date)
    this.props.postWeightToDB({
      kg: this.state.weight,
      date: 20171021,
    })
    this.togglePostingMode()
    // this.setState({ loading: true }, () =>
    //   this.postDelay(),
    // )
  }

  render() {
    return (
      <div>
        <div className="weight-daily">
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

          {this.state.isPostMode ? (
            <div>
              <div className="weight-add-wrapper">
                <Input
                  focus
                  fluid
                  error={this.state.isPositiveNum}
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
                  loading={this.state.loading}
                  disabled={
                    this.state.isPositiveNum
                  }
                  onClick={
                    this.createPayloadAndPostToDB
                  }
                >
                  입력
                </Button>
              </div>
              <span className="weight-alert">
                {this.state.valueAlert}
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
            {this.props.weightListItem.length !==
            0
              ? this.props.weightListItem.map(
                  Item => {
                    const dateArr = Item.diary_date.split(
                      '-',
                    )
                    const dateRender =
                      dateArr[0] +
                      '년 ' +
                      dateArr[1] +
                      '월 ' +
                      dateArr[2] +
                      '일'
                    return Item.day_log_kg !==
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
                            {Item.day_log_kg}
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
                              src={ArrowDown}
                              alt="이전 몸무게보다 낮음을 표시"
                            />
                          </List.Content>
                          <List.Content floated="right">
                            <img
                              src={trash}
                              alt="삭제버튼"
                              /* onclick={} */
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
    postWeightToDB: payload =>
      dispatch(postWeightToDB(payload)),
    fetchWeight: () =>
      dispatch(fetchWeightFromDB()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightDaily)
