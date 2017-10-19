import React from 'react'
import {
  Button,
  List,
  Divider,
  Icon,
} from 'semantic-ui-react'
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
          <Icon name="pencil" />
        </Button>
        <Button style={Style.buttonIcon}>
          <Icon name="trash outline" />
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
