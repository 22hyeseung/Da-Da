import React, { Component } from 'react'
import {
  Header,
  Button,
  List,
  Input,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import ArrowUp from '../../static/img/weight-daily-arrowUp.svg'
import ArrowDown from '../../static/img/weight-daily-arrowDown.svg'
import * as Style from './StyledWeight'
import { connect } from 'react-redux'
import {
  postWeightToDB,
  fetchWeightToDB,
} from '../../actions/weight.js'
import map from 'lodash/map'

class WeightDaily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      isPostMode: false,
      isFocusMode: false,
      valueAlert: '',
      isPositiveNum: false,
    }
  }

  componentDidMount() {
    {
      this.props.fetchWeight()
    }
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
  }

  closeAndResetValue = e =>
    this.setState({
      date: '',
      weight: '',
      isPostMode: !this.state.isPostMode,
    })

  createPayloadAndPostToDB = () => {
    const dateTime = new Date()
    const date = dateTime.toLocaleDateString()

    if (!this.state.weight) {
      return
    }
    this.props.postWeightToDB({
      id: '',
      date: date,
      weight: this.state.weight,
    })
    this.closeAndResetValue()
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
              <MdAdd
                size={20}
                style={{ marginRight: '10px' }}
              />
              오늘 체중 기록하기
            </Button>
          )}
          {console.log(this.props.weightListItem)}
          {/* 리스트 시작 */}
          <List divided verticalAlign="bottom">
            {this.props.weightListItem.map(
              Item => {
                return (
                  <List.Item
                    style={Style.listItem}
                  >
                    <List.Content
                      style={Style.date}
                    >
                      {Item.date}
                    </List.Content>
                    <List.Content
                      style={{
                        padding: '0px 30px',
                      }}
                    />
                    <div className="weight-daily-value">
                      <List.Content
                        style={Style.weigthValue}
                      >
                        {Item.weight}
                      </List.Content>
                      <List.Content
                        className="weight-daily-value-unit"
                        style={Style.weightUnit}
                      >
                        kg
                      </List.Content>
                      <List.Content floated="right">
                        <img
                          src={ArrowDown}
                          alt="이전 몸무게보다 낮음을 표시"
                        />
                      </List.Content>
                    </div>
                  </List.Item>
                )
              },
            )}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postWeightToDB: payload =>
      dispatch(postWeightToDB(payload)),
    fetchWeight: () =>
      dispatch(fetchWeightToDB()),
  }
}

// export default WeightDaily
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeightDaily)
