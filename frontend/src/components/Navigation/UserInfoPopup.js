import React, { Component } from 'react'
import {
  Grid,
  Image,
  Segment,
  Button,
} from 'semantic-ui-react'
import * as styled from './StyledNavigation'
import UserInfoPopup from './UserInfoPopup'

class UserInfo extends Component {
  render() {
    return (
      <Grid
        style={{
          textAlign: 'center',
          color: '#16325c',
          width: '220px',
          height: '280px',
        }}
      >
        <Grid.Row
          style={{
            height: '85px',
            paddingBottom: '0',
          }}
        >
          <Grid.Column
            style={{
              padding: '0',
              marginLeft: '21px',
              width: '80px',
            }}
          >
            <Image
              style={{
                ...styled.avatar,
                width: '69px',
                height: '69px',
              }}
              shape="circular"
              src="https://placeimg.com/34/34/people"
            />
          </Grid.Column>
          <Grid.Column
            style={{
              padding: '10px 0 0 0',
              width: '102px',
            }}
          >
            <p
              style={{
                // width: '58px',
                // height: '25px',
                fontSize: '21px',
                fontWeight: '700',
                textAlign: 'left',
                margin: '0',
                paddingLeft: '7px',
              }}
            >
              홍길동
            </p>
            <p
              style={{
                fontFamily: 'Montserrat-medium',
                fontSize: '12px',
                width: '102px',
                height: '27px',
                lineHeight: '27px',
                color: '#fff',
                borderRadius: '21px',
                backgroundImage:
                  'linear-gradient(255deg, #26d0ce, #1a2980)',
              }}
            >
              160cm / 60kg
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          style={{
            padding: '0',
            height: '115px',
          }}
        >
          <Segment
            style={{
              marginLeft: '21px',
              height: '114px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              오늘은 10일차 입니다.
            </p>
            <div
              style={{
                width: '150px',
                height: '55px',
                lineHeight: '27.5px',
                borderRadius: '4px',
                border: 'solid 1px #d8dde6',
              }}
            >
              목표체중까지
              <p>
                <span
                  style={{ fontWeight: '700' }}
                >
                  9
                </span>kg 남았습니다.
              </p>
            </div>
          </Segment>
        </Grid.Row>
        <Grid.Row
          style={{
            height: '40px',
            marginLeft: '108px',
            padding: '0',
          }}
        >
          <Button
            basic
            style={{ height: '36px' }}
          >
            로그아웃
          </Button>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UserInfo
