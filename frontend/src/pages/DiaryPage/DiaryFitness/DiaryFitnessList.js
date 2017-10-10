import React from 'react'
import {
  Button,
  List,
  Divider,
} from 'semantic-ui-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import * as styled from './StyledFitness'

const DiaryFitnessAdd = () => (
  <div>
    <List horizontal style={styled.listWrap}>
      <List.Item style={styled.listItemLeft}>
        <List.Header style={styled.text}>
          팔 굽혀 펴기
        </List.Header>
      </List.Item>
      <List.Item style={styled.listItemLeft}>
        <Button style={styled.buttonIcon}>
          <FaPencil size={20} />
        </Button>
        <Button style={styled.buttonIcon}>
          <FaTrashO size={20} />
        </Button>
      </List.Item>
      <List.Item style={styled.listItemRight}>
        <List.Header style={styled.text}>
          30분
        </List.Header>
      </List.Item>
      <List.Item style={styled.listItemRight}>
        <List.Header style={styled.textSmall}>
          <span style={styled.textBig}>
            105{' '}
          </span>kcal
        </List.Header>
      </List.Item>
    </List>
    <Divider />
  </div>
)

export default DiaryFitnessAdd
