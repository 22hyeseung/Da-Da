import React from 'react'
import {
  Button,
  Input,
  List,
  Divider,
} from 'semantic-ui-react'
import TiTimes from 'react-icons/lib/ti/times'
import TiEquals from 'react-icons/lib/ti/equals'
import * as styled from './StyledFitness'

const DiaryFitnessInput = () => {
  return (
    <div>
      <List horizontal style={styled.listWrap}>
        <List.Item
          style={styled.listItemLeftWrap}
        >
          <List.Content>
            <Input
              icon="search"
              placeholder="어떤 종류의 운동을 하셨나요?"
              style={styled.inputStyle}
            />
            <TiTimes
              size={25}
              style={styled.tiemsIcon}
            />
          </List.Content>
        </List.Item>
        <List.Item
          style={styled.listItemRightWrap}
        >
          <List.Content>
            <Input placeholder="얼마나 운동하셨나요?" />
            <TiEquals
              size={25}
              style={styled.equalIcon}
            />
          </List.Content>
        </List.Item>
        <List.Item
          style={styled.listItemRightAlign}
        >
          <List.Content
            style={styled.textSmall_Input}
          >
            <span style={styled.textBig}>
              0{' '}
            </span>kcal
          </List.Content>
        </List.Item>
        <div style={styled.buttonWrap}>
          <Button basic style={styled.button}>
            취소
          </Button>
          <Button style={styled.submitButton}>
            등록
          </Button>
        </div>
      </List>
      <Divider />
    </div>
  )
}

export default DiaryFitnessInput
