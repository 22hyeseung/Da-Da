import React, { Component } from 'react'
import {
  Grid,
  Image,
  Icon,
  Label,
  Card,
  Header,
} from 'semantic-ui-react'
import img1 from '../../../static/img/result1.png'
import img2 from '../../../static/img/result2.png'
import img3 from '../../../static/img/result3.png'
import img4 from '../../../static/img/result4.png'
import * as Style from './StyledResult'

const ResultBox = () => {
  return (
    <Grid style={Style.wrapper}>
      <Grid.Row style={Style.messagewrap}>
        <span style={Style.message}>
          ‘팬케익’ 검색 결과 8건
        </span>
        <div
          style={{
            position: 'absolute',
            bottom: '7px',
            right: '25.6px',
          }}
        >
          <Icon
            style={Style.icon}
            name="grid layout"
            size="large"
          />
          <Icon
            style={Style.icon}
            name="list layout"
            size="large"
          />
        </div>
      </Grid.Row>
      <Grid.Row
        columns={4}
        style={Style.ImageWrap}
      >
        <Grid.Column style={{ padding: '0' }}>
          <div style={{ width: '279px' }}>
            <Card>
              <Image
                as="a"
                style={{
                  ...Style.ResultImage,
                  backgroundImage: `url(${img1})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={Style.CardLabel}
              >
                <Card.Header
                  style={Style.CardLabelHeader}
                >
                  트리플베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={Style.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={Style.CardLabelRightText}
                >
                  <span style={Style.dataText}>
                    340
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
                style={{
                  ...Style.ResultImage,
                  backgroundImage: `url(${img2})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={Style.CardLabel}
              >
                <Card.Header
                  style={Style.CardLabelHeader}
                >
                  스트로베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={Style.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={Style.CardLabelRightText}
                >
                  <span style={Style.dataText}>
                    320
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
                style={{
                  ...Style.ResultImage,
                  backgroundImage: `url(${img3})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={Style.CardLabel}
              >
                <Card.Header
                  style={Style.CardLabelHeader}
                >
                  블루베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={Style.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={Style.CardLabelRightText}
                >
                  <span style={Style.dataText}>
                    270
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
                style={{
                  ...Style.ResultImage,
                  backgroundImage: `url(${img4})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={Style.CardLabel}
              >
                <Card.Header
                  style={Style.CardLabelHeader}
                >
                  바나나 팬케익
                </Card.Header>
                <Card.Meta
                  style={Style.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={Style.CardLabelRightText}
                >
                  <span style={Style.dataText}>
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

export default ResultBox
