import React from 'react'
import {
  Button,
  Input,
  List,
  Divider,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'
import multiplyIcon from '../../../static/img/diary-multiply.svg'
import returnIcon from '../../../static/img/diary-return.svg'
import rootApi from '../../../config'
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
            <List.Content>
              <Input
                icon="search"
                placeholder="어떤 종류의 운동을 하셨나요?"
                style={Style.inputStyle}
                onChange={this.handleChange}
                value={this.state.userInput}
                onKeyDown={this.handleKeyPress}
              />
              <img
                src={multiplyIcon}
                alt="곱하기 모양의 아이콘입니다."
              />
            </List.Content>
            <ul>
              {this.state.results.map(
                (result, i) => {
                  return (
                    <li>
                      {result.exercise_name}
                      {result.exercise_burn_kcal}
                    </li>
                  )
                },
              )}
            </ul>
            <List.Content />
          </List.Item>
          <List.Item
            style={Style.listItemRightWrap}
          >
            <List.Content>
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
                0{' '}
              </span>kcal
            </List.Content>
          </List.Item>
          <div style={Style.buttonWrap}>
            <Button basic style={Style.button}>
              취소
            </Button>
            <Button style={Style.submitButton}>
              등록
            </Button>
          </div>
        </List>
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
