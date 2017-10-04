import React, { Component } from 'react'
import {
  Grid,
  Image,
  Icon,
  Label,
  Card,
  Header,
} from 'semantic-ui-react'

const wrapper = {
  width: '1180px',
  position: 'absolute',
  top: '141px',
  left: '131px',
  verticalAlign: 'middle',
}

const message = {
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
  marginRight: '12.3px',
}

const messagewrap = {
  height: '28px',
  padding: '0',
  position: 'absolute',
  top: '15px',
  left: '14px',
  lineHeight: '28px',
}

const ImageWrap = {
  position: 'absolute',
  top: '54px',
  left: '14px',
  padding: '0',
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
        <Grid.Row style={messagewrap}>
          <span style={message}>
            ‘팬케익’ 검색 결과 8건
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: '7px',
              right: '25.6px',
            }}>
            <Icon
              style={icon}
              name="grid layout"
              size="large"
            />
            <Icon
              style={icon}
              name="list layout"
              size="large"
            />
          </div>
        </Grid.Row>
        <Grid.Row columns={4} style={ImageWrap}>
          <Grid.Column style={{ padding: '0' }}>
            <div style={{ width: '279px' }}>
              <Card>
                <Image
                  as="a"
                  style={ImageSize}
                  src="http://lorempixel.com/279/271/food/"
                  href="http://google.com"
                  target="_blank">
                  {/* <Label
                content="Image not found!"
                icon="warning"
              /> */}
                </Image>
                <Card.Content
                  style={{
                    width: '279px',
                    height: '83px',
                    position: 'absolute',
                    top: '188px',
                    fontWeight: '100',
                    fontSize: '14px',
                    opacity: '0.7',
                    borderRadius: '4px',
                    backgroundImage:
                      'linear-gradient(253deg, #485563, #29323c)',
                  }}>
                  <Card.Header
                    style={{
                      color: '#fff',
                      fontWeight: '100',
                      position: 'absolute',
                      top: '13.5px',
                      left: '18px',
                      fontSize: '21px',
                    }}>
                    베리 팬케익
                  </Card.Header>
                  <Card.Meta
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      top: '48px',
                      left: '18px',
                    }}>
                    <Icon name="clock" />
                    소요시간: 60분
                  </Card.Meta>
                  <Card.Description
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      bottom: '15px',
                      right: '17px',
                    }}>
                    <span
                      style={{
                        fontFamily:
                          'Montserrat-Regular',
                        fontSize: '21px',
                      }}>
                      380
                    </span>{' '}
                    kcal
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '0' }}>
            <div style={{ width: '279px' }}>
              <Card>
                <Image
                  as="a"
                  style={ImageSize}
                  src="http://lorempixel.com/279/271/food/"
                  href="http://google.com"
                  target="_blank">
                  {/* <Label
                content="Image not found!"
                icon="warning"
              /> */}
                </Image>
                <Card.Content
                  style={{
                    width: '279px',
                    height: '83px',
                    position: 'absolute',
                    top: '188px',
                    fontWeight: '100',
                    fontSize: '14px',
                    opacity: '0.7',
                    borderRadius: '4px',
                    backgroundImage:
                      'linear-gradient(253deg, #485563, #29323c)',
                  }}>
                  <Card.Header
                    style={{
                      color: '#fff',
                      fontWeight: '100',
                      position: 'absolute',
                      top: '13.5px',
                      left: '18px',
                      fontSize: '21px',
                    }}>
                    팬케익
                  </Card.Header>
                  <Card.Meta
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      top: '48px',
                      left: '18px',
                    }}>
                    <Icon name="clock" />
                    소요시간: 60분
                  </Card.Meta>
                  <Card.Description
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      bottom: '15px',
                      right: '17px',
                    }}>
                    <span
                      style={{
                        fontFamily:
                          'Montserrat-Regular',
                        fontSize: '21px',
                      }}>
                      380
                    </span>{' '}
                    kcal
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '0' }}>
            <div style={{ width: '279px' }}>
              <Card>
                <Image
                  as="a"
                  style={ImageSize}
                  src="http://lorempixel.com/279/271/food/"
                  href="http://google.com"
                  target="_blank">
                  {/* <Label
                content="Image not found!"
                icon="warning"
              /> */}
                </Image>
                <Card.Content
                  style={{
                    width: '279px',
                    height: '83px',
                    position: 'absolute',
                    top: '188px',
                    fontWeight: '100',
                    fontSize: '14px',
                    opacity: '0.7',
                    borderRadius: '4px',
                    backgroundImage:
                      'linear-gradient(253deg, #485563, #29323c)',
                  }}>
                  <Card.Header
                    style={{
                      color: '#fff',
                      fontWeight: '100',
                      position: 'absolute',
                      top: '13.5px',
                      left: '18px',
                      fontSize: '21px',
                    }}>
                    팬케익
                  </Card.Header>
                  <Card.Meta
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      top: '48px',
                      left: '18px',
                    }}>
                    <Icon name="clock" />
                    소요시간: 60분
                  </Card.Meta>
                  <Card.Description
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      bottom: '15px',
                      right: '17px',
                    }}>
                    <span
                      style={{
                        fontFamily:
                          'Montserrat-Regular',
                        fontSize: '21px',
                      }}>
                      380
                    </span>{' '}
                    kcal
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
          <Grid.Column style={{ padding: '0' }}>
            <div style={{ width: '279px' }}>
              <Card>
                <Image
                  as="a"
                  style={ImageSize}
                  src="http://lorempixel.com/279/271/food/"
                  href="http://google.com"
                  target="_blank">
                  {/* <Label
                content="Image not found!"
                icon="warning"
              /> */}
                </Image>
                <Card.Content
                  style={{
                    width: '279px',
                    height: '83px',
                    position: 'absolute',
                    top: '188px',
                    fontWeight: '100',
                    fontSize: '14px',
                    opacity: '0.7',
                    borderRadius: '4px',
                    backgroundImage:
                      'linear-gradient(253deg, #485563, #29323c)',
                  }}>
                  <Card.Header
                    style={{
                      color: '#fff',
                      fontWeight: '100',
                      position: 'absolute',
                      top: '13.5px',
                      left: '18px',
                      fontSize: '21px',
                    }}>
                    팬케익
                  </Card.Header>
                  <Card.Meta
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      top: '48px',
                      left: '18px',
                    }}>
                    <Icon name="clock" />
                    소요시간: 60분
                  </Card.Meta>
                  <Card.Description
                    style={{
                      color: '#fff',
                      position: 'absolute',
                      bottom: '15px',
                      right: '17px',
                    }}>
                    <span
                      style={{
                        fontFamily:
                          'Montserrat-Regular',
                        fontSize: '21px',
                      }}>
                      380
                    </span>{' '}
                    kcal
                  </Card.Description>
                </Card.Content>
              </Card>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ResultBox
