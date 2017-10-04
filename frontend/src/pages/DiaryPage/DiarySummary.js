import React, { Component } from 'react'
import {
  Segment,
  Header,
  Button,
  List,
} from 'semantic-ui-react'
import pieGraph from '../../static/img/diary-graph.svg'

class DiarySummary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Segment
          style={{
            boxShadow:
              '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
            padding: '27px 27px 36px 27px',
            border: 'none',
          }}
        >
          {/* title 시작 */}
          <Header
            style={{
              fontSize: '28px',
              fontWeight: '100',
              color: '#16325C',
            }}
          >
            <Header.Subheader
              style={{
                fontFamily: 'montserrat',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2e79',
              }}
            >
              SUMMARY
            </Header.Subheader>
            요약
          </Header>
          {/* title 끝 */}

          <List
            divided
            verticalAlign="bottom"
            style={{ marginLeft: '30%' }}
          >
            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                border: 'none',
              }}
            >
              <List.Content />
              <List.Content
                style={{
                  fontSize: '12px',
                  fontWeight: '100',
                  color: '#a8b7c7',
                }}
              >
                (kcal)
              </List.Content>
            </List.Item>
            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
                border: 'none',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                일일 권장량
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                1200
              </List.Content>
            </List.Item>

            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
                border: 'none',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                섭취 칼로리
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                -
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                300
              </List.Content>
            </List.Item>

            <List.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0px',
                border: 'none',
              }}
            >
              <List.Content
                style={{
                  fontSize: '12px',
                  color: '#54698d',
                }}
              >
                운동 칼로리
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                +
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                100
              </List.Content>
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
                남은 칼로리
              </List.Content>
              <List.Content
                style={{
                  fontFamily:
                    'montserrat-semibold',
                  fontSize: '24px',
                  color: '#16325c',
                }}
              >
                1000
              </List.Content>
            </List.Item>
          </List>
          {/* 리스트 끝 */}

          {/* comment 시작 */}
          <Header
            style={{
              marginBottom: '4px',
            }}
          >
            <Header.Subheader
              style={{
                fontFamily: 'montserrat',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2e79',
              }}
            >
              COMMENT
            </Header.Subheader>
          </Header>

          <Segment
            style={{
              padding: '25px',
              textAlign: 'center',
              fontWeight: '100',
              color: 'white',
              boxShadow: 'none',
              border: 'none',
              backgroundColor: '#54698D',
              margin: '0px',
            }}
          >
            더 열심히 운동하셔야겠어요 !
          </Segment>
          {/* comment 끝 */}

          <Header
            style={{
              marginBottom: '4px',
            }}
          >
            <Header.Subheader
              style={{
                fontFamily: 'montserrat',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1f2e79',
              }}
            >
              NUTRITION<br /> GRAPH
            </Header.Subheader>
          </Header>
          <img
            src={pieGraph}
            style={{
              margin: '0 auto',
              display: 'block',
            }}
          />
        </Segment>
      </div>
    )
  }
}

export default DiarySummary
