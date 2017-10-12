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

class WeightDaily extends Component {
  state = {
    isPostMode: false,
  }

  togglePostingMode = () =>
    this.setState({
      isPostMode: !this.state.isPostMode,
    })

  render() {
    return (
      <div>
        <div className="weight-daily">
          {/* title 시작 */}
          <Header style={Style.header}>
            <Header.Subheader
              style={Style.subHeader}
            >
              DAILY WEIGHT
            </Header.Subheader>
            체중기록
          </Header>
          {/* title 끝 */}

          {this.state.isPostMode ? (
            <div>
              <Input
                focus
                style={{
                  display: 'inline-block',
                }}
                placeholder="몸무게를 입력하세요"
              />
              <Button>입력</Button>
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

          {/* 리스트 시작 */}
          <List divided verticalAlign="bottom">
            <List.Item style={Style.listItem}>
              <List.Content style={Style.date}>
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <div className="weight-daily-value">
                <List.Content
                  style={Style.weigthValue}
                >
                  50
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

            <List.Item style={Style.listItem}>
              <List.Content style={Style.date}>
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <div className="weight-daily-value">
                <List.Content
                  style={Style.weigthValue}
                >
                  50
                </List.Content>
                <List.Content
                  className="weight-daily-value-unit"
                  style={Style.weightUnit}
                >
                  kg
                </List.Content>
                <List.Content floated="right">
                  <img
                    src={ArrowUp}
                    alt="이전 몸무게보다 높음을 표시"
                  />
                </List.Content>
              </div>
            </List.Item>

            <List.Item style={Style.listItem}>
              <List.Content style={Style.date}>
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <div className="weight-daily-value">
                <List.Content
                  style={Style.weigthValue}
                >
                  50
                </List.Content>
                <List.Content
                  className="weight-daily-value-unit"
                  style={Style.weightUnit}
                >
                  kg
                </List.Content>
                <List.Content floated="right">
                  <img
                    src={ArrowUp}
                    alt="이전 몸무게보다 높음을 표시"
                  />
                </List.Content>
              </div>
            </List.Item>
          </List>
          {/* 리스트 끝 */}
        </div>
      </div>
    )
  }
}

export default WeightDaily
