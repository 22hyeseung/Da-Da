import React from 'react'
import {
  Segment,
  Header,
  Button,
  List,
} from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import ArrowUp from '../../static/img/weight-daily-arrowUp.svg'
import ArrowDown from '../../static/img/weight-daily-arrowDown.svg'

import * as Style from './StyledWeight'

const WeightDaily = () => {
  return (
    <div>
      <Segment style={Style.weightDailyBox}>
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

        <Button fluid style={Style.weightAddBtn}>
          <MdAdd
            size={20}
            style={{ marginRight: '10px' }}
          />
          오늘 체중 기록하기
        </Button>

        {/* 리스트 시작 */}
        <List divided verticalAlign="bottom">
          <List.Item style={Style.listItem}>
            <List.Content style={Style.date}>
              2017년 09월 02일
            </List.Content>
            <List.Content
              style={{ padding: '0px 30px' }}
            />
            <List.Content
              style={Style.weigthValue}
            >
              50
            </List.Content>
            <List.Content
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
          </List.Item>

          <List.Item style={Style.listItem}>
            <List.Content style={Style.date}>
              2017년 09월 02일
            </List.Content>
            <List.Content
              style={{ padding: '0px 30px' }}
            />
            <List.Content
              style={Style.weigthValue}
            >
              50
            </List.Content>
            <List.Content
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
          </List.Item>

          <List.Item style={Style.listItem}>
            <List.Content style={Style.date}>
              2017년 09월 02일
            </List.Content>
            <List.Content
              style={{ padding: '0px 30px' }}
            />
            <List.Content
              style={Style.weigthValue}
            >
              50
            </List.Content>
            <List.Content
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
          </List.Item>
        </List>
        {/* 리스트 끝 */}
      </Segment>
    </div>
  )
}

export default WeightDaily
