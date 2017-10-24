import React from 'react'
import {
  Button,
  List,
  Divider,
  Icon,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'

class DiaryFitnessAdd extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <List horizontal style={Style.listWrap}>
          <div
            style={{
              width: '55%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <List.Header style={Style.text}>
              {this.props.name}
            </List.Header>
          </div>
          <List.Item
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '23%',
            }}
          >
            <List.Header>
              {this.props.time} 분
            </List.Header>
            <List.Header>
              <span style={Style.textBig}>
                {this.props.kcal}{' '}
              </span>kcal
            </List.Header>
          </List.Item>
          <List.Item
            style={{
              ...Style.listItemLeft,
              display: 'flex',
            }}
          >
            <Button style={Style.buttonIcon}>
              <Icon name="pencil" />
            </Button>
            <Button style={Style.buttonIcon}>
              <Icon name="trash outline" />
            </Button>
          </List.Item>
        </List>
        <Divider />
      </div>
    )
  }
}

export default DiaryFitnessAdd
