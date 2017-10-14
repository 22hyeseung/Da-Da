import React from 'react'
import {
  Button,
  List,
  Divider,
} from 'semantic-ui-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import * as Style from './StyledFitness'

const DiaryFitnessAdd = () => (
  <div>
    <List horizontal style={Style.listWrap}>
      <List.Item style={Style.listItemLeft}>
        <List.Header style={Style.text}>
          팔 굽혀 펴기
        </List.Header>
      </List.Item>
      <List.Item style={Style.listItemLeft}>
        <Button style={Style.buttonIcon}>
          <FaPencil size={20} />
        </Button>
        <Button style={Style.buttonIcon}>
          <FaTrashO size={20} />
        </Button>
      </List.Item>
      <List.Item style={Style.listItemRight}>
        <List.Header style={Style.text}>
          30분
        </List.Header>
      </List.Item>
      <List.Item style={Style.listItemRight}>
        <List.Header style={Style.textSmall}>
          <span style={Style.textBig}>
            105{' '}
          </span>kcal
        </List.Header>
      </List.Item>
    </List>
    <Divider />
  </div>
)

export default DiaryFitnessAdd
