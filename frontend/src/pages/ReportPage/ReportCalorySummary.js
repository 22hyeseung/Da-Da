import React, { Component } from 'react'
import {
  Segment,
  Header,
  List,
} from 'semantic-ui-react'
import summaryImg from '../../static/img/report_calory_img.png'
import './Report.css'

class ReportCalorySummary extends Component {
  render() {
    return (
      <Segment
        style={{
          padding: '25px 25px 115px',
          boxShadow:
            '0 2px 5px 0 rgba(79, 64, 64, 0.2)',
          border: 'none',
          backgroundImage: `url(${summaryImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: '70%',
        }}
      >
        <Header
          style={{
            fontSize: '28px',
            fontWeight: '100',
            fontFamily: 'Spoqa Han Sans',
            textAlign: 'left',
            color: '#16325C',
            margin: '0px',
          }}
        >
          <Header.Subheader
            style={{
              fontSize: '14px',
              fontFamily: 'montserrat-bold',
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
    )
  }
}

export default ReportCalorySummary
