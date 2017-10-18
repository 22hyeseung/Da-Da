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
            <img
              src={multiplyIcon}
              alt="곱하기 모양의 아이콘입니다."
            />
          </List.Content>
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

export default DiaryFitnessInput
