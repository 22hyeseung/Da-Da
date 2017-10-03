import React, { Component } from 'react'
import {
  Grid,
  Image,
  Icon,
} from 'semantic-ui-react'

const wrapper = {
  width: '1180px',
  position: 'absolute',
  top: '141px',
  left: '131px',
  verticalAlign: 'middle',
}

const supText = {
  width: '128px',
  height: '20px',
  fontSize: '14px',
  fontWeight: '300',
  textAlign: 'left',
  color: '#54698d',
}

const icon = {
  width: '13.5px',
  height: '13.5px',
  color: '#54698d',
}

const ImageSize = {
  width: '279px',
  height: '271px',
  borderRadius: '4px',
}

class ResultBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid style={wrapper}>
        <Grid.Row
          style={{
            height: '28px',
          }}>
          <span style={supText}>
            ‘팬케익’ 검색 결과 8건
          </span>
          <Icon style={icon} name="grid layout" />
          <Icon style={icon} name="list layout" />
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column>
            <Image
              style={ImageSize}
              src="https://placeimg.com/279/271/natural"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              style={ImageSize}
              src="https://placeimg.com/279/271/natural"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              style={ImageSize}
              src="https://placeimg.com/279/271/natural"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              style={ImageSize}
              src="https://placeimg.com/279/271/natural"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ResultBox
