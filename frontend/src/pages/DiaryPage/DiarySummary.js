import React, { Component } from 'react'
import {
  Segment,
  Header,
  Button,
  List,
} from 'semantic-ui-react'

class DiarySummary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Segment
          style={{
            border: 'none',
            boxShadow:
              '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
            padding: '27px 27px 180px 27px',
          }}
        >
          {/* title 시작 */}
          <Header
            style={{
              fontSize: '28px',
              fontWeight: '100',
              textAlign: 'left',
              color: '#16325C',
              marginBottom: '30px',
            }}
          >
            <Header.Subheader
              style={{
                fontFamily: 'montserrat',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'left',
                color: '#1f2e79',
              }}
            >
              SUMMARY
            </Header.Subheader>
            요약
          </Header>
          {/* title 끝 */}

          <Button
            fluid
            style={{
              backgroundImage:
                ' linear-gradient(261deg, #485563, #29323c)',
              color: '#fff',
              fontWeight: '100',
            }}
          >
            오늘 체중 기록하기
          </Button>

          {/* 리스트 시작 */}
          <List divided verticalAlign="bottom">
            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                50
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-reguler',
                  fontSize: '16px',
                  color: '#16325c',
                }}
              >
                kg
              </List.Content>
              <List.Content floated="right" />
            </List.Item>

            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                50
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-reguler',
                  fontSize: '16px',
                  color: '#16325c',
                }}
              >
                kg
              </List.Content>
              <List.Content floated="right" />
            </List.Item>

            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                2017년 09월 02일
              </List.Content>
              <List.Content
                style={{ padding: '0px 30px' }}
              />
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                50
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-reguler',
                  fontSize: '16px',
                  color: '#16325c',
                }}
              >
                kg
              </List.Content>
              <List.Content floated="right" />
            </List.Item>
          </List>
          {/* 리스트 끝 */}
        </Segment>
      </div>
    )
  }
}

export default DiarySummary
