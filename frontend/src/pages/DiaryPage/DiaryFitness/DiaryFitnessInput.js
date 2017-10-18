import React from 'react'
import {
  Button,
  Input,
  List,
  Divider,
} from 'semantic-ui-react'
import TiTimes from 'react-icons/lib/ti/times'
import TiEquals from 'react-icons/lib/ti/equals'
import * as Style from './StyledFitness'

const DiaryFitnessInput = () => {
  return (
    <div>
      <List horizontal style={Style.listWrap}>
        <List.Item style={Style.listItemLeftWrap}>
          <List.Content>
            <Input
              icon="search"
              placeholder="어떤 종류의 운동을 하셨나요?"
              style={Style.inputStyle}
            />
            <TiTimes
              size={25}
              style={Style.tiemsIcon}
            />
          </List.Content>
        </List.Item>
        <List.Item
          style={Style.listItemRightWrap}
        >
          <List.Content>
            <Input placeholder="얼마나 운동하셨나요?" />
            <TiEquals
              size={25}
              style={Style.equalIcon}
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

export default DiaryFitnessInput
