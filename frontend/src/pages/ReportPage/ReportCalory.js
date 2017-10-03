import React, { Component } from 'react'
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import summaryImg from '../../static/img/report_calory_img.png'
import './Report.css'
import ReportSampleChart from './ReportSampleChart'

class ReportCalory extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Segment.Group horizontal>
          {/* 왼쪽 박스 start */}
          <Segment
            style={{
              width: '750px',
              padding: '27px',
            }}
          >
            <Header
              style={{
                fontSize: '28px',
                fontWeight: '100',
                textAlign: 'left',
                color: '#16325C',
                margin: '0px',
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
                THIS WEEK’s
              </Header.Subheader>
              칼로리 리포트
            </Header>
            <ReportSampleChart />
            {/* 왼쪽 박스 end */}
          </Segment>

          {/* 오른쪽 요약 박스 start */}
          <Segment
            style={{
              borderLeft: 'none',
              width: '14%',
            }}
            className="report-summary"
          >
            <Segment
              style={{
                padding: '25px 25px 100px 25px',
                boxShadow:
                  '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
                border: 'none',
                backgroundImage: `url(${summaryImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:
                  'right bottom',
                backgroundSize: '70%',
              }}
            >
              <Header
                style={{
                  fontSize: '28px',
                  fontWeight: '100',
                  textAlign: 'left',
                  color: '#16325C',
                  margin: '0px',
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

              <List
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '140px',
                  justifyContent: 'space-between',
                  borderBottom: 'none',
                  marginTop: '0px',
                }}
              >
                <List.Item>
                  <List.Content
                    floated="right"
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
                  className="report-summary-list"
                  style={{ display: 'flex' }}
                >
                  <List.Content className="report-summary-title">
                    아침 식사
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-rate"
                  >
                    30%
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-result"
                  >
                    200
                  </List.Content>
                </List.Item>
                <List.Item
                  className="report-summary-list"
                  style={{ display: 'flex' }}
                >
                  <List.Content className="report-summary-title">
                    점심 식사
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-rate"
                  >
                    20%
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-result"
                  >
                    200
                  </List.Content>
                </List.Item>
                <List.Item
                  className="report-summary-list"
                  style={{ display: 'flex' }}
                >
                  <List.Content className="report-summary-title">
                    저녁 식사
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-rate"
                  >
                    15%
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-result"
                  >
                    200
                  </List.Content>
                </List.Item>
                <List.Item
                  className="report-summary-list"
                  style={{ display: 'flex' }}
                >
                  <List.Content className="report-summary-title">
                    간식/기타
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-rate"
                  >
                    35%
                  </List.Content>
                  <List.Content
                    floated="right"
                    className="report-result"
                  >
                    200
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Segment>
          {/* 오른쪽 요약 박스 end */}
        </Segment.Group>
      </div>
    )
  }
}

export default ReportCalory
