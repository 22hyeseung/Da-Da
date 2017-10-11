import React, { Component } from 'react'
import {
  Grid,
  Image,
  Icon,
  Label,
  Card,
  Header,
} from 'semantic-ui-react'
import img2 from '../../../static/img/result2.png'
import img3 from '../../../static/img/result3.png'
import img4 from '../../../static/img/result4.png'
import * as styled from './StyledResult'

const ResultBox = () => {
  return (
    <Grid style={styled.wrapper}>
      <Grid.Row style={styled.messagewrap}>
        <span style={styled.message}>
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
            style={styled.icon}
            name="grid layout"
            size="large"
          />
          <Icon
            style={styled.icon}
            name="list layout"
            size="large"
          />
        </div>
      </Grid.Row>
      <Grid.Row
        columns={4}
        style={styled.ImageWrap}
      >
        <Grid.Column style={{ padding: '0' }}>
          <div style={{ width: '279px' }}>
            <Card>
              <Image
                as="a"
                style={styled.ResultImage}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={styled.CardLabel}
              >
                <Card.Header
                  style={styled.CardLabelHeader}
                >
                  트리플베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={styled.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={
                    styled.CardLabelRightText
                  }
                >
                  <span style={styled.dataText}>
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
                  ...styled.ResultImage,
                  backgroundImage: `url(${img2})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={styled.CardLabel}
              >
                <Card.Header
                  style={styled.CardLabelHeader}
                >
                  스트로베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={styled.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={
                    styled.CardLabelRightText
                  }
                >
                  <span style={styled.dataText}>
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
                  ...styled.ResultImage,
                  backgroundImage: `url(${img3})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={styled.CardLabel}
              >
                <Card.Header
                  style={styled.CardLabelHeader}
                >
                  블루베리 팬케익
                </Card.Header>
                <Card.Meta
                  style={styled.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={
                    styled.CardLabelRightText
                  }
                >
                  <span style={styled.dataText}>
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
                  ...styled.ResultImage,
                  backgroundImage: `url(${img4})`,
                }}
                src="/"
                href="http://google.com"
                target="_blank"
              />
              <Card.Content
                style={styled.CardLabel}
              >
                <Card.Header
                  style={styled.CardLabelHeader}
                >
                  바나나 팬케익
                </Card.Header>
                <Card.Meta
                  style={styled.CardLabelLeftText}
                >
                  <Icon name="clock" />
                  소요시간: 60분
                </Card.Meta>
                <Card.Description
                  style={
                    styled.CardLabelRightText
                  }
                >
                  <span style={styled.dataText}>
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
