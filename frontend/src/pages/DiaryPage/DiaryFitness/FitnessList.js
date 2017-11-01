import React from 'react'
import {
  Button,
  List,
  Divider,
  Icon,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'

class FitnessAdd extends React.Component {
  render() {
    return (
      <div>
        <List horizontal style={Style.listWrap}>
          <div style={Style.listItemWrap}>
            <List.Header style={Style.text}>
              {this.props.name}
            </List.Header>
          </div>
          <List.Item style={Style.listItemResult}>
            <List.Header
              style={Style.listItemTime}
            >
              {this.props.time} 분
            </List.Header>
            <List.Header
              style={Style.listItemKcal}
            >
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
            <Button
              style={Style.buttonIcon}
              onClick={this.props.show(
                'blurring',
                this.props.id,
                this.props.kcal,
                this.props.name,
                this.props.time,
                this.props.unitKcal,
              )}
            >
              <Icon name="pencil" />
            </Button>
            <Button
              style={Style.buttonIcon}
              onClick={() =>
                this.props.deleteFitnessOfDB(
                  this.props.id,
                  this.props.kcal,
                )}
            >
              <Icon name="trash outline" />
            </Button>
          </List.Item>
        </List>
        <Divider />
      </div>
    )
  }
}

export default FitnessAdd
